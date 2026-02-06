import React, { useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  agency: string;
  website: string;
  clients: string;
  hearAbout: string;
}

const initialForm: FormData = { name: "", email: "", agency: "", website: "", clients: "", hearAbout: "" };

const clientOptions = ["1–10", "11–25", "26–50", "51–100", "100+"];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PartnerApplicationForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errs.name = "This field is required";
    if (!form.email.trim()) errs.email = "This field is required";
    else if (!emailRegex.test(form.email.trim())) errs.email = "Please enter a valid email address";
    if (!form.agency.trim()) errs.agency = "This field is required";
    if (!form.clients) errs.clients = "This field is required";
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      // Scroll to first error
      const firstKey = Object.keys(errs)[0] as keyof FormData;
      const el = formRef.current?.querySelector(`[name="${firstKey}"]`) as HTMLElement | null;
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      el?.focus();
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const payload = {
      referralType: "partner_application",
      name: form.name.trim(),
      email: form.email.trim(),
      agencyName: form.agency.trim(),
      agencyWebsite: form.website.trim(),
      activeClients: form.clients,
      hearAbout: form.hearAbout.trim(),
    };
    console.log("Partner application submitted:", payload);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1000);
  };

  const inputCls = (field: keyof FormData) =>
    `w-full h-12 px-4 rounded-xl border text-sm text-text-primary placeholder:text-muted-foreground/60 outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-border-gray focus:border-brand focus:ring-2 focus:ring-brand/15"
    }`;

  return (
    <section
      id="partner-apply"
      className="relative py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #1e2acd 0%, #0d1247 100%)", border: "none" }}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white/80 text-center text-lg mb-10 max-w-[600px] mx-auto leading-relaxed">
          Join agencies already building recurring revenue by recommending shipping protection their clients trust.
        </p>

        <div className="bg-white rounded-3xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] p-8 md:p-10">
          {success ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#2db87a]/15 flex items-center justify-center mb-5">
                <CheckCircle2 size={36} className="text-[#2db87a]" />
              </div>
              <h3 className="font-heading font-bold text-text-primary text-xl mb-2">Application Received</h3>
              <p className="text-muted-foreground mb-8">We will be in touch within 24 hours.</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border-2 border-brand text-brand rounded-full px-8 py-3 font-bold text-sm hover:bg-brand hover:text-white transition-all min-h-[44px]"
              >
                Back to Top
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-heading font-bold text-text-primary text-[22px] mb-8 text-center">
                Apply to Partner Program
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="name" value={form.name} onChange={set("name")} className={inputCls("name")} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="email" value={form.email} onChange={set("email")} placeholder="you@agency.com" className={inputCls("email")} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Agency Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Agency Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="agency" value={form.agency} onChange={set("agency")} className={inputCls("agency")} />
                  {errors.agency && <p className="text-red-500 text-xs mt-1">{errors.agency}</p>}
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Agency Website</label>
                  <input type="url" name="website" value={form.website} onChange={set("website")} placeholder="https://youragency.com" className={inputCls("website")} />
                </div>

                {/* Clients dropdown */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">
                    Active Merchant Clients <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="clients"
                    value={form.clients}
                    onChange={set("clients")}
                    className={`${inputCls("clients")} bg-white appearance-none`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="">Select…</option>
                    {clientOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {errors.clients && <p className="text-red-500 text-xs mt-1">{errors.clients}</p>}
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">How did you hear about Parcelis?</label>
                  <input type="text" name="hearAbout" value={form.hearAbout} onChange={set("hearAbout")} className={inputCls("hearAbout")} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full h-12 rounded-full bg-[#2db87a] hover:bg-[#259e68] text-white font-bold text-base transition-all min-h-[44px] ${
                    submitting ? "opacity-60 pointer-events-none" : ""
                  }`}
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  We review applications within 24 hours. No contracts. Cancel anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnerApplicationForm;
