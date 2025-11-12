import { BotMessageSquare } from "lucide-react";
import ChatBot from "react-chatbotify";
// import tranquilTeal from "../data/chatbotStyles/tranquilTeal.json";
import botAvatar from "../assets/seekico.svg";

const CF = {
  url: "/cf-ai",
  headers: {
    "Content-Type": "application/json",
  },
};

function parseAnswer(d) {
  console.log(d);
  return (
    d.result.response
  );
}

async function askCloudflare(query) {
  const q = String(query ?? "").trim();
  if (!q) return "Please type a question.";

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 20000); // 20s timeout

  try {
    const res = await fetch(CF.url, {
      method: "POST",
      headers: CF.headers,
      body: JSON.stringify({ query: q, rewrite_query: false, stream: false }),
      signal: ctrl.signal,
    });

    // If CF returns non-200, surface a short explanation
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return `Upstream error (${res.status}). ${text || "Try again shortly."}`;
    }

    const data = await res.json().catch(() => ({}));
    return parseAnswer(data);
  } catch (err) {
    if (err?.name === "AbortError") return "Request timed out. Try again.";
    console.error(err);
    return "Sorry — server error. Try again shortly.";
  } finally {
    clearTimeout(t);
  }
}

export default function ChatNow() {
  // Hook callback for react-chatbotify
  async function onMessage(message) {
    const answer = await askCloudflare(message);
    return { text: String(answer) };
  }

  const settings = {
    general: {
      embedded: true,
      showHeader: true,
      showFooter: false,
      placeholder: "Ask about local resources…",
    },
    header: {
      title: "SeekEasy Assistant",
      showAvatar: true,
      avatar: botAvatar,
    },
    notification: { disabled: true },
    audio: { disabled: true },
    voice: { disabled: true },
    emoji: { disabled: true },
    fileAttachment: { disabled: true },
    chatWindow: {
      showTypingIndicator: true,
      showMessagePrompt: true,
      messagePromptText: "New Messages ↓",
      messagePromptOffset: 30,
    },
  };

  const flow = {
    start: {
      message:
        "👋 Hi! I’m the SeekEasy Assistant. Ask me about local resources anytime.",
      path: "ask",
    },
    ask: {
      message: async ({ userInput }) => await askCloudflare(userInput),
      path: "ask",
    },
  };

  return (
    <section className="max-w-3xl mx-auto">
      <header className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <BotMessageSquare className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Chat Now</h1>
          <p className="text-sm text-neutral-500 leading-snug">
            This tool provides basic information and local options — not therapy
            or medical advice.
          </p>
        </div>
      </header>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="w-full p-4">
          <ChatBot flow={flow} settings={settings} onMessage={onMessage} />
        </div>
      </div>
    </section>
  );
}