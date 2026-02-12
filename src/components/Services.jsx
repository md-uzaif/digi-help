function Services() {
  const services = [
    {
      id: "gov",
      title: "Government Online Services",
      desc: "PAN card, certificates, government forms, and scheme applications handled online.",
    },
    {
      id: "edu",
      title: "Student & Education Services",
      desc: "Admissions, scholarships, exam forms, Residence, Income, Cast and education-related online support.",
    },
    {
      id: "job",
      title: "Job & Resume Services",
      desc: "Resume creation, job applications, and support on online job portals.",
    },
    {
      id: "doc",
      title: "Document Assistance (Online)",
      desc: "PDF editing, form correction, document formatting and uploads (no printing).",
    },
    {
      id: "tech",
      title: "Website & Technical Help",
      desc: "Basic websites, landing pages, bug fixes, deployment, and technical guidance.",
    },
    {
      id: "biz",
      title: "Digital Business Setup",
      desc: "GST guidance, Udyam registration, Google Business, and WhatsApp setup.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-white via-slate-50/60 to-emerald-50/40"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            Our Online Services
          </h2>
          <p className="mt-3 text-slate-600">
            All services are provided <strong>100% online</strong>.
            Clients from any state in India can contact us.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100/70"
            >
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                <h3 className="text-lg font-semibold leading-snug text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>

                <a
                  href="https://wa.me/918084860650"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800"
                >
                  Contact on WhatsApp
                  <span className="ml-1 transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-white/90 px-5 py-4 text-sm text-slate-700 shadow-sm">
          <span className="font-semibold text-slate-900">
            Delivery commitment:
          </span>{" "}
          Most requests are started the same day after receiving details on WhatsApp.
        </div>
      </div>
    </section>
  );
}

export default Services;
