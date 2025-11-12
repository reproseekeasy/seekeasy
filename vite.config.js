import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // loads .env.local

  const ACCOUNT = env.CF_ACCOUNT_ID;
  const RAG = env.CF_RAG_NAME;
  const TOKEN = env.CF_AI_TOKEN;

  // Guard: fail fast if missing
  ["CF_ACCOUNT_ID", "CF_RAG_NAME", "CF_AI_TOKEN"].forEach((k) => {
    if (!env[k]) {
      throw new Error(`Missing ${k}. Add it to .env.local`);
    }
  });

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/cf-ai": {
          target: "https://api.cloudflare.com",
          changeOrigin: true,
          secure: true,
          rewrite: (p) =>
            p.replace(
              /^\/cf-ai/,
              `/client/v4/accounts/${ACCOUNT}/autorag/rags/${RAG}/ai-search`
            ),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              proxyReq.setHeader("Authorization", `Bearer ${TOKEN}`);
              proxyReq.setHeader("Content-Type", "application/json");
            });
          },
        },
      },
    },
  };
});