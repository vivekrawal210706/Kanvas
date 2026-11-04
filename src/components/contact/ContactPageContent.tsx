"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

const services = [
  "Brand Strategy & Identity",
  "Packaging Design",
  "Website Design & Development",
  "Social Media & Digital Creatives",
  "Full Brand Package (Ignite / Orbit)",
  "Not sure yet — let's talk",
];

const budgets = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
  "Prefer not to say",
];

export default function ContactPageContent() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <>
      {/* Page Hero */}
      <section className="section-py section-px bg-[#EDE6D6] border-b border-[#C8BFA8]">
        <div className="container-kanvas">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[#2A5C3A] mb-4 font-sans">
              Get In Touch
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#1C1916] leading-tight mb-6">
              Tell us about your brand.
            </h1>
            <p className="text-[#7A7264] text-lg leading-relaxed">
              Fill in the form and we&apos;ll get back to you within 2 business days. No hard sell — just an honest conversation about whether we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-py section-px bg-[#EDE6D6]">
        <div className="container-kanvas">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              {state.status === "success" ? (
                <div className="paper-card p-10 text-center">
                  <CheckCircle2 size={48} className="text-[#2A5C3A] mx-auto mb-5" />
                  <h2 className="font-heading text-2xl font-bold text-[#1C1916] mb-3">Message received!</h2>
                  <p className="text-[#7A7264] text-base leading-relaxed">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6" noValidate>
                  {/* Error banner */}
                  {state.status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                      <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-red-700">{state.message}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-2 font-sans">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Priya Mehta"
                        className="w-full px-4 py-3 rounded-xl border border-[#C8BFA8] bg-[#FDFBF6] text-[#1C1916] text-sm placeholder:text-[#C8BFA8] focus:outline-none focus:border-[#2A5C3A] focus:ring-1 focus:ring-[#2A5C3A]/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-2 font-sans">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="priya@yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#C8BFA8] bg-[#FDFBF6] text-[#1C1916] text-sm placeholder:text-[#C8BFA8] focus:outline-none focus:border-[#2A5C3A] focus:ring-1 focus:ring-[#2A5C3A]/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="brandName" className="block text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-2 font-sans">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      id="brandName"
                      name="brandName"
                      placeholder="Veda Naturals"
                      className="w-full px-4 py-3 rounded-xl border border-[#C8BFA8] bg-[#FDFBF6] text-[#1C1916] text-sm placeholder:text-[#C8BFA8] focus:outline-none focus:border-[#2A5C3A] focus:ring-1 focus:ring-[#2A5C3A]/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-2 font-sans">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl border border-[#C8BFA8] bg-[#FDFBF6] text-[#1C1916] text-sm focus:outline-none focus:border-[#2A5C3A] focus:ring-1 focus:ring-[#2A5C3A]/20 transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-[#C8BFA8]">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-2 font-sans">
                      Approximate Budget <span className="text-[#A89E92] normal-case tracking-normal font-normal">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl border border-[#C8BFA8] bg-[#FDFBF6] text-[#1C1916] text-sm focus:outline-none focus:border-[#2A5C3A] focus:ring-1 focus:ring-[#2A5C3A]/20 transition-colors appearance-none"
                    >
                      <option value="">Select a range…</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-2 font-sans">
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      placeholder="What's your brand, what stage are you at, and what are you looking to achieve?"
                      className="w-full px-4 py-3 rounded-xl border border-[#C8BFA8] bg-[#FDFBF6] text-[#1C1916] text-sm placeholder:text-[#C8BFA8] focus:outline-none focus:border-[#2A5C3A] focus:ring-1 focus:ring-[#2A5C3A]/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    id="contact-submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2A5C3A] text-[#EDE6D6] text-sm font-medium hover:bg-[#1E4429] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isPending ? "Sending…" : "Send enquiry"}
                    {!isPending && <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />}
                  </button>

                  <p className="text-xs text-[#A89E92]">
                    We respond to all enquiries within 2 business days. For urgent requests, email us directly at{" "}
                    <a href="mailto:hello@kanvas.in" className="text-[#2A5C3A] hover:underline">hello@kanvas.in</a>.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="paper-card p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2A5C3A] mb-5 font-sans">Contact Details</p>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-[#2A5C3A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-[#A89E92] mb-0.5">Email</p>
                      <a href="mailto:hello@kanvas.in" className="text-sm text-[#1C1916] hover:text-[#2A5C3A] transition-colors">
                        hello@kanvas.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#2A5C3A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-[#A89E92] mb-0.5">Phone</p>
                      <a href="tel:+917948952200" className="text-sm text-[#1C1916] hover:text-[#2A5C3A] transition-colors">
                        +91 79 4895 2200
                      </a>
                      <p className="text-xs text-[#A89E92] mt-0.5">Mon–Fri, 10am–6pm IST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#2A5C3A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-[#A89E92] mb-0.5">Studio</p>
                      <p className="text-sm text-[#1C1916] leading-relaxed">
                        204, Titanium City Centre<br />
                        Anand Nagar Road, Satellite<br />
                        Ahmedabad — 380 015, Gujarat
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2A5C3A] text-[#EDE6D6] rounded-2xl p-7">
                <p className="text-xs uppercase tracking-widest text-[#A8C9B4] mb-4 font-sans">What happens next</p>
                <ol className="space-y-4">
                  {[
                    "We review your enquiry and get back to you within 2 business days.",
                    "We schedule a free 30-minute discovery call to understand your brand and goals.",
                    "We send a tailored scope and proposal — no cookie-cutter packages.",
                    "If we're aligned, we kick off with a strategy session.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#EDE6D6]/15 text-[#A8C9B4] text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">
                        {i + 1}
                      </span>
                      <span className="text-sm text-[#C8DDD0] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
