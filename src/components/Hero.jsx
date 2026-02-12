function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-emerald-50 to-sky-50 pt-10 pb-16">
      <div className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">
            100% Online Support
            <span className="h-2 w-2 rounded-full bg-emerald-500 hero-pulse" />
          </div>

          <div className="mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
              Digi <span className="text-emerald-700">Help</span>
            </h1>
            <div className="mt-4 space-y-2">
              <p className="inline-flex items-center gap-3 text-lg md:text-2xl font-semibold text-slate-800">
                <span className="h-1.5 w-10 rounded-full bg-emerald-500" />
                One Place for Digital Services.
              </p>
              <p className="inline-flex items-center gap-3 text-lg md:text-2xl font-semibold text-slate-700">
                <span className="h-1.5 w-10 rounded-full bg-sky-500" />
                Trusted Online Assistance.
              </p>
            </div>
          </div>

          <p className="mt-5 text-base md:text-lg text-slate-700">
            We handle government forms, student services, job applications, and more —
            fully online with clear updates and quick turnaround for clients across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918084860650"
              className="rounded-md bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#services"
              className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-slate-700 font-semibold transition hover:border-slate-400 hover:text-slate-900"
            >
              Browse Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              No physical visit required
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Transparent status updates
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Same-day processing on select tasks
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hero-float relative mx-auto flex w-full max-w-2xl items-start justify-center">
            <div className="relative w-full max-w-xl">
              <div className="rounded-[28px] border border-slate-200 bg-slate-900/95 p-4 shadow-2xl">
                <div className="flex items-center justify-between px-2 pb-3">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-400">Digi Help</span>
                </div>

                <div className="rounded-2xl bg-white/95 p-5 shadow-inner">
                  <h3 className="text-sm font-semibold text-slate-800">Start in 3 steps</h3>
                  <div className="mt-4 space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-700">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 6h16v8H8l-4 4z" />
                          <path d="M8 10h8" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Message on WhatsApp</p>
                        <p className="text-xs text-slate-500">Share your service requirement.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-700">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 4h12v16H6z" />
                          <path d="M9 8h6" />
                          <path d="M9 12h6" />
                          <path d="M9 16h3" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Review & Price confirmation</p>
                        <p className="text-xs text-slate-500">We verify documents & share cost.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-700">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-4 9 4-9 4-9-4z" />
                          <path d="M3 9v6l9 4 9-4V9" />
                          <path d="M9 13l6-3" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold">Pay & receive</p>
                        <p className="text-xs text-slate-500">Get your file delivered.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-slate-700" />
              </div>

            </div>

            <div className="absolute -right-5 -bottom-17 w-45 rounded-[36px] border border-slate-200 bg-slate-900/95 p-3 shadow-2xl">
              <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-slate-700" />
              <div className="rounded-[26px] bg-white/95 p-3 shadow-inner min-h-[280px] flex flex-col">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/20 text-[#1EBE57]">
                    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4 w-4 fill-current">
                      <path d="M16.05 5.33c-5.92 0-10.74 4.82-10.74 10.74 0 1.9.5 3.78 1.46 5.43l-1.54 5.6 5.73-1.5c1.6.86 3.39 1.32 5.18 1.32 5.92 0 10.74-4.82 10.74-10.74S21.97 5.33 16.05 5.33zm0 19.64c-1.68 0-3.33-.45-4.76-1.32l-.34-.2-3.39.89.9-3.29-.22-.34a8.93 8.93 0 0 1-1.4-4.72c0-4.93 4.01-8.94 8.94-8.94s8.94 4.01 8.94 8.94-4.01 8.98-8.94 8.98zm4.99-6.72c-.27-.13-1.6-.79-1.84-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.46.14-.15.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.44-.83-1.97-.21-.52-.43-.45-.59-.45h-.5c-.18 0-.47.07-.71.34-.25.27-.93.93-.93 2.26 0 1.33.96 2.62 1.09 2.8.13.18 1.88 2.89 4.6 4.04.65.27 1.15.44 1.55.56.64.2 1.23.17 1.69.1.51-.08 1.6-.65 1.83-1.27.23-.62.23-1.17.16-1.28-.07-.12-.25-.18-.52-.31z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">WhatsApp</p>
                    <p className="text-[10px] text-slate-500">Online now</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2 text-[11px] leading-snug">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-emerald-600 px-3 py-1 text-white">
                      Hi, mujhe PAN card apply krna hai.
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-1 text-slate-700 shadow-sm">
                      Aadhaar + basic details share kijiye.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-emerald-600 px-3 py-1 text-white">
                      Charges?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-1 text-slate-700 shadow-sm">
                      Rs -/ total. Pay to start.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-emerald-600 px-3 py-1 text-white">
                      Payment done.
                    </div>
                  </div>
                </div>
                <div className="mt-auto" />
              </div>
              <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-slate-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
