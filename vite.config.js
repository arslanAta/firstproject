import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import copy from "rollup-plugin-copy";

export default defineConfig({

  plugins: [
    // copy({
    //   targets: [
    //     {
    //       src: "node_modules/pspdfkit/dist/pspdfkit-lib",
    //       dest: "public/",
    //     },
    //   ],
    //   hook: "buildStart",
    // }),
    react(),
  ],
  // build: {
  //   outDir: "build",
  // },
  // server:{
  //   host:"192.168.192.18",
  //   port:4000
  // }
  base:"/book-reader"
});