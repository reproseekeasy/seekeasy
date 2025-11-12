import { MessageCircle, MessageSquareText, BotMessageSquare } from "lucide-react";

export default function TextLine() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-800">
          Text Line
        </h1>
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white/70 backdrop-blur-md shadow-sm p-8 leading-relaxed text-neutral-700">
        <p className="mb-6">
          The <b>SeekEasy</b> project aims to identify and address gaps in abortion care and access in Montréal —
          particularly for immigrant, refugee, and non-status communities. To support this, we created a decentralized
          text and chat service that helps people access abortion care privately and safely through culturally
          sensitive, community-based methods.
        </p>

        <p className="mb-6">
          Operated by members of the community, SeekEasy works to reduce barriers to reproductive health access and to
          better understand what’s needed for those who can’t easily reach conventional services. Each community
          representative can access their own data set and share insights with others as they see fit.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        <p className="mb-4">
          If you’d like to message the text line directly, send a text/SMS to:
        </p>

        {/* Text Button */}
        <a
          href="sms:+14388030952"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-emerald-800/30 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 transition"
        >
          <MessageSquareText className="h-5 w-5 text-white" aria-hidden="true" />
          <span className="font-medium">Text +1 (438) 803-0952</span>
        </a>
        <p className="mt-3 text-xs text-neutral-500">
          If you're in danger, call your local emergency number.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        <p className="mb-6">
          We’ve also developed a local chatbot to provide quick answers and local resource information. Please note that
          responses are automated — errors may occur, and you are <b>not</b> communicating with a person. The chatbot is
          meant for basic guidance only, not for conversation or therapeutic support.
        </p>

        {/* Chat Button */}
        <a
          href="/ChatNow"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-emerald-800/30 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 transition"
        >
          <BotMessageSquare className="h-5 w-5 text-white" aria-hidden="true" />
          <span className="font-medium">Chat Now</span>
        </a>
      </div>
    </section>
  );
}
