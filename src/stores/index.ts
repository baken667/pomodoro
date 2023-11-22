import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import useTimer from './timer.store'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export default function setupPinia(app: App) {
  app.use(pinia)
}

export { useTimer }
