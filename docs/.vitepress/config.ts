import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Puya Games',
    description: 'Creating open-source games',
    base: '/',
    cleanUrls: true,

    head: [
      ["link", {rel: "icon", href: "/logo.png"}]
    ],

    themeConfig: {
        logo: '/logo.png',

        footer: {
          copyright: 'Copyright © 2024-present Puya Games',
        }
    }
})

