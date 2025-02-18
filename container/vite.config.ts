import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        mfList: "mf-list@http://localhost:3001/assets/remoteEntry.js",
        mfDetails: "mf-details@http://localhost:3002/assets/remoteEntry.js",
        mfAuth: "mf-auth@http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
});
