import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "AppProjects",
      filename: "remoteEntry.js",
      exposes: {
        "./AppProjects": "./src/AppProjects",
      },
      shared: ["react", "react-dom"],
    }),
<<<<<<< HEAD
    federation({
      name:"dbUsers",
      remotes:{
        remotAllUsers: "https://infra-jerusalem-1-client.vercel.app/assets/remoteEntry.js"
      }
    })
=======
>>>>>>> f3d21025daa6fd26b63749a36f9d07a692684034
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
