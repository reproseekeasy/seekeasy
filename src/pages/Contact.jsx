import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <Mail className="h-5 w-5" aria-hidden="true" />
        </span>
        <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
      </div>

      <p className="mt-4 text-neutral-700 max-w-prose">
        Reach out with questions, partnerships, or feedback.
      </p>
      Email: <a href="mailto:theseekeasy@gmail.com">theseekeasy@gmail.com</a>

      <br /><br />

      Anonymous Text Line: <a href="sms:+14388030952">+1 (438) 803-0952</a>.<br />
    </section>
  );
}