import {fileURLToPath, URL} from "url";

import {HaloUIPluginBundlerKit} from "@halo-dev/ui-plugin-bundler-kit";
import path from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import {defineConfig, Plugin} from "vite";
import Vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [Vue(), Icons({compiler: "vue3"}),
    HaloUIPluginBundlerKit(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "./src/locales/*.yaml")],
    }) as Plugin,
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
