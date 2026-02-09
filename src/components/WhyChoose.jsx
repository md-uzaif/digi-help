function WhyChoose() {
  const reasons = [
    {
      title: "100% Online Services",
      desc: "All services are provided completely online. No physical visit required from any location.",
    },
    {
      title: "Pan-India Support",
      desc: "Clients from any state in India can contact us and get digital help via WhatsApp.",
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "Clear price ranges with no hidden charges. Final cost is confirmed before work starts.",
    },
    {
      title: "Fast WhatsApp Response",
      desc: "Quick response and guidance on WhatsApp during working hours.",
    },
    {
      title: "Secure Document Handling",
      desc: "Your documents and personal details are handled carefully and securely online.",
    },
    {
      title: "Student & Job Seeker Friendly",
      desc: "Special focus on helping students, job seekers, and first-time applicants.",
    },
  ];

  return (
    <section id="why-choose" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose - Digi Help
          </h2>
          <p className="mt-3 text-gray-600">
            Trusted online digital assistance for clients across India.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Online support only • No printing or physical services
        </p>
      </div>
    </section>
  );
}

export default WhyChoose;
