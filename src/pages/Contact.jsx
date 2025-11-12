import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-800">
          Contact Us
        </h1>
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white/70 backdrop-blur-md shadow-sm p-8 leading-relaxed text-neutral-700">
        <p className="mb-6">
          Have a question, feedback, or interest in partnering with us? We’d love to hear from you.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
          Email
        </h2>
        <p className="mb-6">
          You can reach us anytime by email at{" "}
          <a
            href="mailto:theseekeasy@gmail.com"
            className="text-emerald-700 hover:underline"
          >
            theseekeasy@gmail.com
          </a>
          .
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
          Anonymous Text Line
        </h2>
        <p className="mb-6">
          For immediate and discreet communication, send a text/SMS to our secure line:
        </p>
        <a
          href="sms:+14388030952"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-emerald-800/30 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 transition"
        >
          <span className="font-medium">Text +1 (438) 803-0952</span>
        </a>

        <p className="mt-3 text-xs text-neutral-500">
          Please do not use this line for emergencies. If you’re in immediate danger, call your local emergency number.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
          Our Commitment
        </h2>
        <p>
          Every message and inquiry is handled with care, compassion, and confidentiality.
          We aim to respond promptly and ensure you feel supported every step of the way.
        </p>
      </div>
    </section>
  );
}
