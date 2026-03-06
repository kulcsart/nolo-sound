"use client";

import { contact } from "@/lib/content";

export default function ContactForm() {
  const { formLabels } = contact;

  return (
    <form
      className="flex w-full flex-col gap-6 rounded border border-espresso bg-espresso p-10 max-md:p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Name field */}
      <div className="flex flex-col gap-2">
        <label className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-semibold text-bronze">
          {formLabels.name}
        </label>
        <input
          type="text"
          name="name"
          required
          className="input-focus-glow h-[42px] rounded border border-darkbrown bg-nearblack px-3 font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-cream outline-none transition-all duration-300 focus:border-gold"
        />
      </div>

      {/* Email field */}
      <div className="flex flex-col gap-2">
        <label className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-semibold text-bronze">
          {formLabels.email}
        </label>
        <input
          type="email"
          name="email"
          required
          className="input-focus-glow h-[42px] rounded border border-darkbrown bg-nearblack px-3 font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-cream outline-none transition-all duration-300 focus:border-gold"
        />
      </div>

      {/* Message field */}
      <div className="flex flex-col gap-2">
        <label className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-semibold text-bronze">
          {formLabels.message}
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="input-focus-glow resize-none rounded border border-darkbrown bg-nearblack px-3 py-2 font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-cream outline-none transition-all duration-300 focus:border-gold"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="btn-gold-glow w-full rounded-sm bg-gold px-6 py-3 text-center font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-semibold text-nearblack hover:bg-goldshimmer"
      >
        {formLabels.submit}
      </button>
    </form>
  );
}
