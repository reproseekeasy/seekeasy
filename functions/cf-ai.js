export async function onRequestPost({ request, env }) {
  const { query = "" } = await request.json().catch(() => ({}));
  const url = `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/autorag/rags/${env.CF_RAG_NAME}/ai-search`;

  const upstream = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.CF_AI_TOKEN}`,
    },
    body: JSON.stringify({ query, rewrite_query: false, stream: false }),
  });

  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}