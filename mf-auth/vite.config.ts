import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mf-auth",
      filename: "remoteEntry.js",
      exposes: {
        "./Auth": "./src/Auth.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3003,
  },
});
