import { Info } from "lucide-react";

export default function About() {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <Info className="h-5 w-5" aria-hidden="true" />
        </span>
        <h1 className="text-3xl font-semibold tracking-tight">About Us</h1>
      </div>
      <div className="mt-4 text-neutral-700 max-w-prose">
        <img src="/seekeasy.svg" height="50%" width="50%"></img>
        <p>
          The SeekEasy is a culturally sensitive, community-based project helping folks find sexual health services — from primary care to mental health and crisis support… Service for all things concerning abortion and sexual and reproductive health (SRH) care.
        </p>
        <br /><p>
          The Seekeasy is run by a diverse group of facilitators who operate a completely anonymized text line and chat bot that allow care seekers to ask questions, get a referral, or seek additional support, such as travel or accompaniment, without ever having to identify themselves. We are committed to malleable community building that supports vulnerable groups in accessing care that suits their needs with discretion and compassion.

          <br /><br /></p>

        <b>Our Mission</b>
        <p>
          The Seekeasy's approach to care is rooted in the belief that regardless of availability, access to services is impacted by many systemic and intersectional variables. The Seekeasy's aim is to support individuals navigating reproductive care facilities in ways that suit them. The Seekeasy hopes to make abortion and reproductive health access a little easier, a little quicker, and a little more private for anyone who wants it.
        </p>
      </div>
    </section>
  );
}