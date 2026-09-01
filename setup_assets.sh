#!/usr/bin/env bash
#
# setup_assets.sh
# Copia recursivamente las fotografías de "Fotos Rossi/" hacia public/assets/images/
# organizándolas por categoría y saneando los nombres de archivo para URLs seguras.
#
# Uso: bash setup_assets.sh
set -euo pipefail

SRC_ROOT="Fotos Rossi"
DEST_ROOT="public/assets/images"

# --- Funciones -----------------------------------------------------------
sanitize_filename() {
  local name="$1"
  # Minúsculas (bash 4+)
  name="${name,,}"
  # Sustituir cualquier carácter ajeno a [a-z0-9._-] por "_"
  name="$(printf '%s' "$name" | sed 's/[^a-z0-9._-]/_/g')"
  # Colapsar múltiples "_" en uno solo
  name="$(printf '%s' "$name" | tr -s '_')"
  # Recortar "_" o "." iniciales/finales
  name="$(printf '%s' "$name" | sed 's/^[._]*//; s/[._]*$//')"
  printf '%s' "$name"
}

# --- Cuerpo -------------------------------------------------------------
if [ ! -d "$SRC_ROOT" ]; then
  echo "ERROR: No se encontró el directorio '$SRC_ROOT'." >&2
  exit 1
fi

mkdir -p "$DEST_ROOT"

copied=0
skipped=0

# Loop sobre cada subcarpeta de categoría en "Fotos Rossi/"
for dir in "$SRC_ROOT"/*/; do
  [ -d "$dir" ] || continue

  # Nombre base, recortando espacios finales (p. ej. "Bouquets ")
  raw_base="$(basename "$dir")"
  base="${raw_base%"${raw_base##*[![:space:]]}"}"

  # Mapear el nombre de la carpeta a un slug URL-safe
  case "$base" in
    *Bouquets*)        slug="bouquets" ;;
    *Engalanados*)     slug="engalanados" ;;
    *Fruteros*)        slug="fruteros" ;;
    *en*piaña*|*en*piña*) slug="funebres-en-piana" ;;
    *Fúnebres*|*Funebres*) slug="funebres" ;;
    *Toda*Ocasión*|*Toda*Ocasion*) slug="toda-ocasion" ;;
    *)
      echo "Skipped (categoría desconocida): $base"
      skipped=$((skipped + 1))
      continue
      ;;
  esac

  dest="$DEST_ROOT/$slug"
  mkdir -p "$dest"
  echo "→ Copiando '$base' a '/$slug/'"

  # Copiar recursivamente sólo imágenes
  while IFS= read -r -d '' file; do
    fname="$(basename "$file")"
    safe="$(sanitize_filename "$fname")"
    if [ -z "$safe" ]; then
      echo "  !! Nombre inválido, se omite: $fname"
      continue
    fi
    cp "$file" "$dest/$safe"
    copied=$((copied + 1))
  done < <(find "$dir" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' -o -iname '*.gif' \) -print0)
done

echo "--------------------------------------------------------"
echo "✅ Listo. $copied imágenes copiadas a $DEST_ROOT."
[ "$skipped" -gt 0 ] && echo "⚠️  $skipped categoría(s) omitida(s)."
echo "👉 Ejecuta ahora: node scripts/generate-catalog.mjs para regenerar src/constants/data.ts"
