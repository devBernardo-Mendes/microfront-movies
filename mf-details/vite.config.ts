import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mf-details",
      filename: "remoteEntry.js",
      exposes: {
        "./Details": "./src/Details.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
});
