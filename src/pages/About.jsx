import { Info } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
          <Info className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-800">
          About Us
        </h1>
      </div>

      {/* Card Container */}
      <div className="rounded-3xl border border-neutral-200 bg-white/70 backdrop-blur-md shadow-sm p-8 leading-relaxed text-neutral-700">
        <div className="flex justify-center mb-8">
          <img
            src="/seekeasy.svg"
            alt="SeekEasy logo"
            className="h-32 w-auto opacity-90"
          />
        </div>

        <p className="mb-6">
          <b>SeekEasy</b> is a culturally sensitive, community-based project
          helping folks find sexual health services — from primary care to
          mental health and crisis support. We offer guidance and referrals for
          all matters concerning abortion and sexual and reproductive health
          (SRH) care.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        <p className="mb-8">
          Our team is composed of diverse facilitators who operate a completely
          anonymized text line and chat bot. These allow care seekers to ask
          questions, get referrals, or access support — such as travel or
          accompaniment — without ever having to identify themselves. We’re
          dedicated to community care that prioritizes discretion, compassion,
          and accessibility.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
          Our Mission
        </h2>
        <p>
          SeekEasy’s approach to care is rooted in the belief that access to
          services is shaped by many systemic and intersectional factors. Our
          mission is to help individuals navigate reproductive care options in
          ways that feel safe, supported, and empowering. We aim to make access
          to abortion and reproductive health a little easier, a little quicker,
          and a lot more private.
        </p>
      </div>
    </section>
  );
}
