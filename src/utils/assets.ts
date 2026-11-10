export function getRouterBasename(): string | undefined {
  if (typeof window !== 'undefined' && window.location.hostname === 'ianlain.github.io') {
    return '/floristeriarossi'
  }
  return undefined
}

export function assetUrl(path: string): string {
  const normalizedPath = path.replace(/^\/+/, '')
  const routerBasename = getRouterBasename()

  if (routerBasename) {
    return `${routerBasename}/${normalizedPath}`
  }

  const envBase = import.meta.env.BASE_URL
  const basePath =
    !envBase || envBase === './' || envBase === '.'
      ? '/'
      : envBase.endsWith('/')
        ? envBase
        : `${envBase}/`

  return `${basePath}${normalizedPath}`
}
