import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "./ui/Section";
import { socials } from "../data/nav";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({ ok: false, msg: `Email isn't configured — reach me directly at ${socials.email}.` });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Preet Patel",
          from_email: form.email,
          to_email: socials.email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ ok: true, msg: "Thanks — I'll get back to you soon." });
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          setStatus({ ok: false, msg: "Something went wrong. Try again, or email me directly." });
        }
      );
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something"
      subtitle="Open to AI/software engineering roles — new grad and internship. The fastest way to reach me is email."
    >
      <div className="grid md:grid-cols-5 gap-8">
        <form ref={formRef} onSubmit={handleSubmit} className="md:col-span-3 flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white">Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-accent transition-colors"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white">Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-accent transition-colors"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white">Message</span>
            <textarea
              rows={5}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What are you working on?"
              className="rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-accent transition-colors resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-fit rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
          {status && (
            <p className={`text-sm ${status.ok ? "text-accent-2" : "text-red-400"}`}>{status.msg}</p>
          )}
        </form>

        <div className="md:col-span-2 rounded-2xl border border-border bg-surface/60 p-6 h-fit">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-2 mb-4">Direct</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${socials.email}`} className="text-white hover:text-accent-2 transition-colors">
                {socials.email}
              </a>
            </li>
            <li>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                Résumé (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
