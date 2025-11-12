
import { MessageCircle, MessageSquareText, BotMessageSquare } from "lucide-react";

export default function TextLine() {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <h1 className="text-3xl font-semibold tracking-tight">Text Line</h1>
      </div>

      <div className="mt-4 text-neutral-700 max-w-prose">

        The Seekeasy's goal is to identify and target provisional gaps in abortion care and access in Montreal, particularly in immigrant, refugee, and non-status communities. To do this, the project created a decentralized text/chat service that assists people to gain abortion access privately and safely via more culturally sensitive and varied methods. The Seekeasy is operated by members of the community in an effort to minimize barriers to abortion access and have a better sense of what is needed for those who cannot access services through conventional means. The chat service would allow each community representative to have access to their own set of data and share their findings with other community representatives as they see fit. If you would like to message the text line, please send a text/SMS message to: <a
          href="sms:+14388030952">+1 (438) 803-0952</a>.

        <a
          href="sms:+14388030952"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-emerald-800/30 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 transition"
        >
          <MessageSquareText className="h-5 w-5 text-white" aria-hidden="true" />
          <span className="font-medium text-white">Text +1 (438) 803-0952</span>
        </a>
        <p className="mt-3 text-xs text-neutral-500">If you're in danger, call your local emergency number.</p>
        <p>
          <br />
          We have also developed a local chatbot to answer questions more immediately. Please note, the responses are automated and thus errors can happen; please remember, you are not talking to a person when consulting the chatbot. The chatbot should be used to provide basic information and local options - it is not conversational or therapeutic.
        </p>
      </div>
      <a
        href="/ChatNow"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-emerald-800/30 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 transition"
      >
        <BotMessageSquare className="h-5 w-5 text-white" aria-hidden="true" />
        <span className="font-medium text-white">Chat Now</span>
      </a>

    </section>
  );
}