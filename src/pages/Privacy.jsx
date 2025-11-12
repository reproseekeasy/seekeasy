import { ShieldCheck } from "lucide-react";

export default function Privacy() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-800">
          Privacy
        </h1>
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white/70 backdrop-blur-md shadow-sm p-8 leading-relaxed text-neutral-700">
        {/* Safe Browsing */}
        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
          Safe Browsing
        </h2>
        <p className="mb-4">
          It’s important to remember that when browsing the internet, some
          trackable information is transmitted through your wireless or wired
          connections.
        </p>
        <p className="mb-3 font-medium">Remember:</p>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>Consider the device you are using to access the bot</li>
          <li>Use a VPN for tracking security</li>
          <li>Ensure your privacy settings are appropriately managed</li>
          <li>
            Use{" "}
            <a
              href="https://www.torproject.org/download/"
              target="_blank"
              className="text-emerald-700 hover:underline"
            >
              Tor browser
            </a>{" "}
            for additional privacy
          </li>
          <li>
            Use private browser mode when accessing sensitive sites and clear
            cache/cookies afterward
          </li>
        </ul>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        {/* Confidentiality */}
        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
          Confidentiality
        </h2>

        <h3 className="text-lg font-semibold text-neutral-700 mt-4 mb-1">
          Text Service
        </h3>
        <p className="mb-4">
          Your privacy is our top priority. SeekEasy does not trace calls,
          texts, or live chat conversations. We cannot identify or contact you
          if you choose to stay anonymous.
        </p>
        <p className="mb-4">
          Our text service uses secure, end-to-end encryption. Once a
          conversation ends, we no longer have access to your contact
          information. Encryption ensures that any intercepted data appears as
          unreadable code rather than visible text.
        </p>
        <p className="mb-4">
          Anonymized records may be retained for training, research, or quality
          control — but no identifiable information will ever be shared publicly
          or with third parties.
        </p>
        <p className="mb-6">
          When you contact us, you may use your real name, an alias, or nothing
          at all — it’s completely your choice. Your message remains
          confidential, and a trained facilitator will respond.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        {/* Chatbot Section */}
        <h3 className="text-lg font-semibold text-neutral-700 mt-4 mb-2">
          Chat Bot
        </h3>
        <p className="mb-4">
          Please note that the same level of privacy does <b>not</b> apply to
          the chatbot. Do not share personal or identifiable details when using
          it. For safer use:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>Consider the device you’re using to access the bot</li>
          <li>Use a VPN for tracking protection</li>
          <li>Ensure your privacy settings are appropriately managed</li>
          <li>
            Use{" "}
            <a
              href="https://www.torproject.org/download/"
              target="_blank"
              className="text-emerald-700 hover:underline"
            >
              Tor browser
            </a>{" "}
            for additional privacy
          </li>
        </ul>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        {/* Policy */}
        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
          Policy
        </h2>
        <p>
          This website is hosted by Cloudflare. You can review their privacy
          policy{" "}
          <a
            href="https://www.cloudflare.com/en-ca/privacypolicy/#cloudflare-privacy-policy"
            target="_blank"
            className="text-emerald-700 hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
