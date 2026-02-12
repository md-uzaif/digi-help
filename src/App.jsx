import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <WhyChoose />
      <section id="faqs" className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] text-emerald-700 font-semibold">
              FAQ's
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              Quick answers before you share documents
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              We know online fraud is common today. Here is how we keep your data secure and
              your process transparent.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            <details className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                How can I trust Digi Help?
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We collect only the documents required for your specific service and use them
                strictly for official processing. Your data is never shared with unauthorized
                parties. Once the service is completed, your documents are securely removed.
                Our process is built on privacy, transparency, and accountability.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                Do you charge before starting the work?
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We explain the full process and fees upfront. Work starts only after you agree
                to the charges and required documents.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                How will I know my application status?
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                You receive updates on WhatsApp for each milestone so you always know the
                current status of your application.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                Is my personal information kept private?
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Yes. We use secure handling practices and share data only with official portals required to complete your request. 
                We request only necessary documents and never share them with unauthorized third parties. 
                After your service is completed, documents are securely removed from our records.
                We believe in transparency and long-term trust with our clients.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section id="policies" className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] text-emerald-700 font-semibold">
              POLICIES
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              Clear service policies
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              Please review these policies before placing a request. They are designed to keep our
              service process transparent, secure, and fair.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            <details
              id="privacy-policy"
              className="group scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                Privacy Policy
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We collect only the documents and personal details required for the selected
                service. Your information is used only for official processing and is never shared
                with unauthorized third parties. Documents are handled securely and removed from our
                records after service completion wherever applicable.
              </p>
            </details>

            <details
              id="terms-and-conditions"
              className="group scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                Terms and Conditions
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                By using Digi Help, you confirm that submitted details and documents are correct.
                Final approval timelines depend on government or third-party portals. We provide
                assistance, documentation support, and application processing based on the selected
                service scope.
              </p>
            </details>

            <details
              id="refund-and-returns-policy"
              className="group scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                Refund and Returns Policy
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                If work cannot be completed due to verified
                technical issues or server downtime, the paid amount will be refunded after
                deducting a nominal processing charge. If work has not started, cancellation and
                refund requests are reviewed case-by-case after verification.
                Service fees are non-refundable once processing has started or documents have been
                submitted to any official portal. 
              </p>
            </details>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
