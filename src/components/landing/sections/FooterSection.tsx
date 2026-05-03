import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import GradientText from "@/components/ui/GradientText";

export function FooterSection() {
  const TELEGRAM_GROUP_URL = "https://t.me/Quartzfinancial";

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/70 py-10 md:py-12">
      <Container className="max-w-7xl">
        <div className="py-4 md:py-6">
          <div className="grid gap-8 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-6">
            <div>
              <Image
                src="/logo/quartz_dark_logo.webp"
                alt="Quartz"
                width={150}
                height={34}
                className="h-9 w-auto"
                style={{ width: "auto" }}
              />
              <p className="mt-4 md:mt-10 max-w-md text-sm font-medium md:text-base leading-relaxed text-zinc-600">
                Quartz is a market intelligence community helping traders and
                investors decode macro signals, structure execution, and act
                with institutional-grade clarity.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700 md:text-sm">
                Office : <span className="font-bold">DUBAI. MUMBAI. CASABLANCA.</span>
              </p>

              {/* <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
                  Newsletter
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Get weekly market clarity in your inbox.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-800 outline-none transition focus:border-zinc-500"
                  />
                  <button
                    type="button"
                    className="h-10 rounded-lg bg-zinc-900 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div> */}
            </div>

            <div>
              <p className="pb-2 text-xs md:text-base leading-none font-semibold uppercase tracking-[0.14em] text-zinc-800">
                Explore
              </p>
              <div className="mt-1 space-y-2 border-t border-zinc-200 pt-3 text-sm md:text-base text-zinc-600">
                <Link href="#home" className="group flex w-fit items-center gap-1 transition hover:text-zinc-900">
                  <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </Link>
                <Link href="#partners" className="group flex w-fit items-center gap-1 transition hover:text-zinc-900">
                  <span>Partners</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </Link>
                <Link href="#inside-community" className="group flex w-fit items-center gap-1 transition hover:text-zinc-900">
                  <span>Community</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </Link>
                <Link href="#what-we-track" className="group flex w-fit items-center gap-1 transition hover:text-zinc-900">
                  <span>What We Track</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </Link>
                <Link href="#what-members-say" className="group flex w-fit items-center gap-1 transition hover:text-zinc-900">
                  <span>Testimonials</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </Link>
              </div>
            </div>

            <div>
              <p className="pb-2 text-xs md:text-base leading-none font-semibold uppercase tracking-[0.14em] text-zinc-800">
                Follow us on
              </p>
              <div className="mt-1 space-y-2 border-t border-zinc-200 pt-3 text-sm md:text-base text-zinc-600">
                <a
                  href="https://www.facebook.com/profile.php?id=61578375064590&rdid=3ZYmIVcDXGMCobIe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18qKdvkrKh%2F#"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center gap-1 transition hover:text-zinc-900"
                >
                  <span>Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </a>
                <a
                  href={TELEGRAM_GROUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center gap-1 transition hover:text-zinc-900"
                >
                  <span>Telegram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </a>
              </div>
            </div>

            <div>
              <p className="pb-2 text-xs md:text-base leading-none font-semibold uppercase tracking-[0.14em] text-zinc-800">
                Get in touch
              </p>
              <div className="mt-1 space-y-3 border-t border-zinc-200 pt-3 text-sm md:text-base text-zinc-600">
                <a
                  href="mailto:advisory@qf-advisory.com"
                  className="group flex w-fit items-center gap-1 transition hover:text-zinc-900"
                >
                  <span>advisory@qf-advisory.com</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </a>
                <p className="border-t border-zinc-200 pt-3 text-sm text-zinc-600 md:text-base">
                  For more details, visit our main website:
                </p>
                <a
                  href="https://consult.qf-advisory.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center gap-1  text-zinc-700 transition hover:text-zinc-900"
                >
                  <span>consult.qf-advisory.com</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0.75 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5  py-4  text-xs md:text-base leading-relaxed text-zinc-600 font-medium md:mt-6 border-t border-zinc-200 pt-6">
          <GradientText
            colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
            animationSpeed={3}
            direction="horizontal"
            showBorder={false}
            pauseOnHover={false}
            className="inline font-bold! underline decoration-zinc-400 underline-offset-4"
          >
            Risk Disclosure:
          </GradientText>{" "}
          Financial markets involve significant risk. Content shared by Quartz Financial Advisory is for informational purposes only and does not constitute financial advice. Please consult a qualified financial adviser before making any investment decisions. Ensure you understand the regulations applicable in your country of residence.
        </div>

        <div className="mt-4 border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 md:text-sm">
          © {new Date().getFullYear()} Quartz Financial Advisory | All rights reserved. Developed with <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline align-middle mx-0.5 icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg> by <a href="https://subhajit-dhali.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-4 hover:text-zinc-700 transition">Subhajit</a>


        </div>
      </Container>
    </footer>
  );
}
