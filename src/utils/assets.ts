export function getRouterBasename(): string | undefined {
  if (typeof window !== 'undefined' && window.location.hostname === 'ianlain.github.io') {
    return '/floristeriarossi'
  }
  return undefined
}

export function assetUrl(path: string, withVersion = true): string {
  const normalizedPath = path.replace(/^\/+/, '')
  const routerBasename = getRouterBasename()

  let resolvedUrl: string
  if (routerBasename) {
    resolvedUrl = `${routerBasename}/${normalizedPath}`
  } else {
    const envBase = import.meta.env.BASE_URL
    const basePath =
      !envBase || envBase === './' || envBase === '.'
        ? '/'
        : envBase.endsWith('/')
          ? envBase
          : `${envBase}/`

    resolvedUrl = `${basePath}${normalizedPath}`
  }

  if (withVersion && !import.meta.env.DEV && typeof __APP_VERSION__ !== 'undefined') {
    const separator = resolvedUrl.includes('?') ? '&' : '?'
    return `${resolvedUrl}${separator}v=${__APP_VERSION__}`
  }

  return resolvedUrl
}
