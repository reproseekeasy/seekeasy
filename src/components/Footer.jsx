export default function Footer() {
  return (
    <footer className="border-t border-emerald-200/50 bg-emerald-50/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-700 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-medium">
          © {new Date().getFullYear()} SeekEasy
        </p>

        <a
          href="mailto:theseekeasy@gmail.com"
          className="text-emerald-700 hover:text-emerald-900 font-medium transition underline-offset-2 hover:underline"
        >
          theseekeasy@gmail.com
        </a>
      </div>
    </footer>
  );
}