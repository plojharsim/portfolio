import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const birthDate = new Date(2010, 8, 16);
const ageHtml = () => {
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  if (now < new Date(now.getFullYear(), 8, 16)) age--;
  return {
    name: "age-html",
    transformIndexHtml: (html: string) => html.replaceAll("%AGE%", String(age)),
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), ageHtml(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
