function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-emerald-50 to-sky-50">
      <div className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
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
              href="https://wa.me/91XXXXXXXXXX"
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
          <div className="hero-float rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Live Queue
                </p>
                <p className="text-2xl font-['Fraunces'] text-slate-900">
                  28 tasks in progress
                </p>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                Avg. 2 hrs
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              {[
                { label: "Scholarship Forms", status: "Submitted", color: "bg-emerald-500" },
                { label: "PAN Updates", status: "Reviewing", color: "bg-amber-500" },
                { label: "Job Applications", status: "In Progress", color: "bg-sky-500" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-500">{item.status}</p>
                  </div>
                  <span className={`h-3 w-3 rounded-full ${item.color}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl border border-amber-200 bg-amber-100/70 shadow-lg lg:block hero-float-slow" />
          <div className="pointer-events-none absolute -top-6 -right-4 hidden h-20 w-20 rounded-full border border-sky-200 bg-sky-100/70 shadow-lg lg:block hero-float-slower" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
