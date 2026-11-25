import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const appVersion = Date.now().toString(36)

function versionManifestPlugin(version: string): Plugin {
  return {
    name: 'version-manifest',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(/href="\.\/rose\.png"/g, `href="./rose.png?v=${version}"`)
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify({ version }),
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), versionManifestPlugin(appVersion)],
  base: './',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  server: {
    open: false,
  },
})
