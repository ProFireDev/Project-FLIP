import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            name: 'Project-Flip-vite',
            short_name: 'Flip-Vite',
            description: 'Project flip pwa running on vite',
            background_color: '#ffff',
            theme_color: '#05a1e4',
            display: 'standalone',
            orientation: 'portrait',
            start_url: '/',
        }),
    ],
})
