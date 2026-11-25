import { lazy, type ComponentType, type LazyExoticComponent } from 'react'
import { assetUrl } from './assets'

const RELOAD_GUARD_KEY = 'rossi_reloaded_version'
const CHUNK_RELOAD_GUARD_KEY = 'rossi_chunk_reload_ts'
const STORED_VERSION_KEY = 'rossi_app_version'

async function clearStaleBrowserCaches(): Promise<void> {
  try {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations()
      await Promise.all(registrations.map((registration) => registration.unregister()))
    }
  } catch {
    // Ignorar errores en contextos restringidos
  }

  try {
    if ('caches' in window) {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
    }
  } catch {
    // Ignorar errores en contextos restringidos
  }
}

async function forceFreshReload(targetVersion?: string): Promise<void> {
  try {
    if (targetVersion) {
      sessionStorage.setItem(RELOAD_GUARD_KEY, targetVersion)
    }
  } catch {
    // sessionStorage no disponible
  }

  await clearStaleBrowserCaches()

  try {
    await fetch(window.location.href, { cache: 'reload' })
  } catch {
    // Ignorar fallos de red previos al reload
  }

  window.location.reload()
}

export async function checkForUpdates(): Promise<void> {
  if (import.meta.env.DEV) return

  try {
    const response = await fetch(`${assetUrl('/version.json', false)}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    })

    if (!response.ok) return

    const data = (await response.json()) as { version?: string }
    const remoteVersion = data?.version

    if (!remoteVersion || remoteVersion === __APP_VERSION__) {
      try {
        localStorage.setItem(STORED_VERSION_KEY, __APP_VERSION__)
      } catch {
        // Ignorar si localStorage está bloqueado
      }
      return
    }

    let alreadyReloadedForVersion = false
    try {
      alreadyReloadedForVersion = sessionStorage.getItem(RELOAD_GUARD_KEY) === remoteVersion
    } catch {
      alreadyReloadedForVersion = false
    }

    if (!alreadyReloadedForVersion) {
      await forceFreshReload(remoteVersion)
    }
  } catch {
    // Sin conexión o error transitorio: continuar con la versión actual
  }
}

export function initVersionAutoRefresh(): void {
  if (import.meta.env.DEV || typeof window === 'undefined') return

  void checkForUpdates()

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      void checkForUpdates()
    }
  })

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      void checkForUpdates()
    }
  })
}

/**
 * Envuelve React.lazy para que si un usuario tenía abierta una versión anterior
 * y falla la descarga de un chunk antiguo tras un despliegue, se limpie caché y recargue una vez.
 */
export function lazyWithReload<T extends ComponentType<unknown>>(
  importer: () => Promise<{ default: T }>,
): LazyExoticComponent<T> {
  return lazy(async () => {
    try {
      return await importer()
    } catch (error) {
      let recentlyReloaded = false
      try {
        const lastReload = Number(sessionStorage.getItem(CHUNK_RELOAD_GUARD_KEY) ?? '0')
        recentlyReloaded = Date.now() - lastReload < 15_000
        if (!recentlyReloaded) {
          sessionStorage.setItem(CHUNK_RELOAD_GUARD_KEY, String(Date.now()))
        }
      } catch {
        recentlyReloaded = true
      }

      if (!recentlyReloaded) {
        await forceFreshReload()
      }

      throw error
    }
  })
}
