function Pricing() {
  const pricing = [
    {
      title: "Basic Online Help",
      price: "₹49 – ₹149",
      desc: "Small and simple online tasks",
      points: [
        "Form guidance",
        "Minor corrections",
        "Single-page online help",
        "WhatsApp support",
      ],
    },
    {
      title: "Standard Online Service",
      price: "₹151 – ₹299",
      desc: "Most commonly used online services",
      points: [
        "Government / student forms",
        "Document editing (PDF / Word)",
        "Online submission support",
        "Status tracking guidance",
      ],
      popular: true,
    },
    {
      title: "Advanced & Digital Services",
      price: "Starting ₹999",
      desc: "Complex, professional, or technical work",
      points: [
        "GST registration & returns",
        "Complex job / multiple form filling",
        "Business or government portals",
        "Website design (starting ₹4999+)",
        "Pricing depends on requirement",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Simple & Transparent Pricing
          </h2>
          <p className="mt-3 text-gray-600">
            Affordable pricing for online services. Final cost confirmed on WhatsApp.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 bg-white ${
                plan.popular ? "ring-2 ring-green-500" : ""
              }`}
            >
              {plan.popular && (
                <span className="inline-block mb-3 text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-gray-800">
                {plan.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {plan.desc}
              </p>

              <p className="mt-4 text-3xl font-bold text-gray-900">
                {plan.price}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {plan.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              <a
                href="https://wa.me/919708709770"
                className="block mt-6 text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"
              >
                Get Exact Price on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Prices depend on work complexity • within 1-2days your work done  • 100% online services
        </p>
      </div>
    </section>
  );
}

export default Pricing;
