function Services() {
  const services = [
    {
      title: "Government Online Services",
      desc: "PAN card, certificates, government forms, and scheme applications handled online.",
    },
    {
      title: "Student & Education Services",
      desc: "Admissions, scholarships, exam forms, and education-related online support.",
    },
    {
      title: "Job & Resume Services",
      desc: "Resume creation, job applications, and support on online job portals.",
    },
    {
      title: "Document Assistance (Online)",
      desc: "PDF editing, form correction, document formatting and uploads (no printing).",
    },
    {
      title: "Website & Technical Help",
      desc: "Basic websites, landing pages, bug fixes, deployment, and technical guidance.",
    },
    {
      title: "Digital Business Setup",
      desc: "GST guidance, Udyam registration, Google Business, and WhatsApp setup.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Online Services
          </h2>
          <p className="mt-3 text-gray-600">
            All services are provided <strong>100% online</strong>.  
            Clients from any state in India can contact us.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {service.desc}
              </p>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="inline-block mt-4 text-sm font-medium text-green-600 hover:underline"
              >
                Contact on WhatsApp →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
