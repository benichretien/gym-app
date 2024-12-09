import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: `${dirname(fileURLToPath(import.meta.url))}/src`,
      },
    ],
  },
});
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
//   },
// });
