import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  // 声明globals关键字, 测试文件不再需要引入各测试模块, 但需修改eslint配置文件忽略错误提示
  test: {
    globals: true,
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enable: true,
      },
      manifest: {
        name: "Music App",
        theme_color: "#ff5e3a",
        icons: [
          {
            src: "assets/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,}"],
      },
    }),
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
