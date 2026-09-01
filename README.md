# Floristería Rossi

Catálogo web para Floristería Rossi, desarrollado con React, TypeScript, Vite y Tailwind CSS.

## Características

- Catálogo modular por categorías
- Diseño minimalista y responsive
- Enlaces directos a WhatsApp para consultas de diseño
- Hero con banner
- Lazy loading para Home, Catálogo y Contacto

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue en GitHub Pages

El workflow de `.github/workflows/deploy.yml` despliega automáticamente cada push a `main`.
También genera `404.html` para que las rutas `/catalogo` y `/contacto` funcionen al recargar la página.

1. En GitHub, abre `Settings > Pages` y selecciona `GitHub Actions` como fuente de despliegue.
2. En el proveedor DNS de `floristeriarossi.com`, crea estos registros:

	- `A` para `@` apuntando a `185.199.108.153`
	- `A` para `@` apuntando a `185.199.109.153`
	- `A` para `@` apuntando a `185.199.110.153`
	- `A` para `@` apuntando a `185.199.111.153`
	- `CNAME` para `www` apuntando a `IANLAIN.github.io`

3. En `Settings > Pages > Custom domain`, escribe `floristeriarossi.com` y guarda.
4. Activa `Enforce HTTPS` cuando GitHub termine de emitir el certificado.

El dominio queda declarado en `public/CNAME`, por lo que se conserva en cada despliegue.
