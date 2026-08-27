"use client";

import { type FormEvent, useState } from "react";
import Aperture from "./aperture";

const whatsappNumber = "919398840252";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "contact", label: "Email or phone", type: "text", autoComplete: "email" },
  { name: "business", label: "Business name", type: "text", autoComplete: "organization" },
];

export default function Contact() {
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const message = [
      "Hello Situa,",
      "",
      "I’d like to discuss a piece of work.",
      "",
      `Name: ${values.get("name")}`,
      `Email or phone: ${values.get("contact")}`,
      `Business: ${values.get("business")}`,
      "",
      `What should work better: ${values.get("message")}`,
    ].join("\n");

    // Track the completed handoff only; form contents must never be sent to analytics.
    window.gtag?.("event", "whatsapp_open", {
      event_category: "contact",
      event_label: "contact_form",
    });

    setIsOpeningWhatsApp(true);
    window.setTimeout(() => {
      window.location.assign(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      );
    }, 450);
  }

  return (
    <section id="contact" className="section container-site scroll-mt-20">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="reveal">
          <p className="eyebrow">
            <Aperture className="w-[14px] h-[15px] flex-none text-signal" />
            The next piece of work
          </p>

          <h2 className="mt-8 text-2xl">
            What should work better for your customers?
          </h2>

          <p className="body-copy mt-8">
            You don&apos;t need a brief. Tell us where customers hesitate, or
            what you want to build next.
          </p>
        </div>

        <form
          className="reveal"
          aria-labelledby="contact-form-heading"
          onSubmit={handleSubmit}
        >
          <h3 id="contact-form-heading" className="sr-only">
            Start a conversation
          </h3>

          <p id="whatsapp-notice" className="mb-8 font-mono text-xs leading-relaxed text-muted">
            WhatsApp opens with your details prepared for you to review before sending.
          </p>

          <div className="grid gap-5">
            {fields.map((f) => (
              <label key={f.name} className="block">
                <span className="block font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {f.label}
                </span>
                <input
                  type={f.type}
                  name={f.name}
                  required
                  autoComplete={f.autoComplete}
                  className="mt-2 w-full bg-surface border border-line px-4 py-3.5 text-text
                             outline-none transition-colors duration-200
                             focus:border-signal"
                />
              </label>
            ))}

            <label className="block">
              <span className="block font-mono text-xs uppercase tracking-[0.16em] text-muted">
                What should work better for your customers?
              </span>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-y bg-surface border border-line px-4 py-3.5 text-text
                           outline-none transition-colors duration-200
                           focus:border-signal"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={isOpeningWhatsApp}
            aria-describedby="whatsapp-notice"
            className="btn btn-primary mt-8 w-full sm:w-auto disabled:cursor-wait disabled:opacity-80"
          >
            {isOpeningWhatsApp ? "Opening WhatsApp…" : "Tell us what should work better"}
          </button>

          {isOpeningWhatsApp && (
            <p className="form-handoff mt-5" role="status" aria-live="polite">
              <span aria-hidden className="form-handoff-spinner" />
              Opening WhatsApp. Your message is ready to review.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
