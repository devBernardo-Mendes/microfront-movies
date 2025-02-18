import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mf-list",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/List.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
  },
});
