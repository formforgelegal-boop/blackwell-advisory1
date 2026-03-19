"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  employees: string;
  writtenContracts: string;
  lastReviewed: string;
  tribunalClaims: string;
  whyNow: string;
  preferredContact: string;
  howHeard: string;
  website?: string;
};

const TOTAL_STEPS = 8;

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const firstName = getValues("firstName");

  const nextStep = async () => {
    let valid = false;

    if (step === 0) {
      valid = await trigger([
        "firstName",
        "lastName",
        "company",
        "email",
        "phone",
      ]);
    } else if (step === 1) {
      valid = await trigger("employees");
    } else if (step === 2) {
      valid = await trigger("writtenContracts");
    } else if (step === 3) {
      valid = await trigger("lastReviewed");
    } else if (step === 4) {
      valid = await trigger("tribunalClaims");
    } else if (step === 5) {
      // whyNow is optional
      valid = true;
    } else if (step === 6) {
      valid = await trigger("preferredContact");
    } else {
      valid = true;
    }

    if (valid) setStep((s) => s + 1);
  };


  const setOptionAndContinue = async (
    field: keyof FormData,
    value: string
  ) => {
    setValue(field, value, { shouldDirty: true, shouldValidate: true });
    await nextStep();
  };

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const payload = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        setSubmitError(
          payload?.error ||
            "Something went wrong. Please email us at reach@blackwelladvisory.co.uk"
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please email us at reach@blackwelladvisory.co.uk"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-stone rounded-sm border border-line p-10 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-accent/20 rounded-none flex items-center justify-center mx-auto mb-6">
          <svg
            className="text-accent"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-ink mb-3">
          Thanks{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p className="text-ink/65 leading-relaxed">
          We&apos;ll confirm your discovery call within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-line rounded-sm px-4 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-colors";
  const errorClass = "text-red-600 text-sm mt-1";
  const labelClass = "block text-sm font-medium text-ink/70 mb-2";
  const optionBtnBase =
    "w-full text-left border rounded-sm px-5 py-4 font-medium transition-colors cursor-pointer";
  const optionBtn = `${optionBtnBase} border-line text-ink hover:border-accent/60 hover:bg-accent/5`;

  const progressPct = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
      {/* Progress bar */}
      <div className="h-1 bg-line rounded-none mb-8 overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${progressPct}%` }}
          role="progressbar"
          aria-valuenow={progressPct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="text-ink/40 text-xs mb-6">
        Step {step + 1} of {TOTAL_STEPS}
      </p>

      {/* ── Step 0: Personal info ─── */}
      {step === 0 && (
        <div className="space-y-5">
          <h3 className="font-serif text-2xl font-bold text-ink mb-6">
            Let&apos;s start with your details
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First name <span className="text-accent">*</span>
              </label>
              <input
                id="firstName"
                {...register("firstName", { required: "First name is required" })}
                className={inputClass}
                placeholder="Jane"
              />
              {errors.firstName && (
                <p className={errorClass}>{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last name <span className="text-accent">*</span>
              </label>
              <input
                id="lastName"
                {...register("lastName", { required: "Last name is required" })}
                className={inputClass}
                placeholder="Smith"
              />
              {errors.lastName && (
                <p className={errorClass}>{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>
              Company name <span className="text-accent">*</span>
            </label>
            <input
              id="company"
              {...register("company", { required: "Company name is required" })}
              className={inputClass}
              placeholder="Acme Ltd"
            />
            {errors.company && (
              <p className={errorClass}>{errors.company.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email address <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={inputClass}
              placeholder="jane@company.com"
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone number <span className="text-accent">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className={inputClass}
              placeholder="07700 900000"
            />
            {errors.phone && (
              <p className={errorClass}>{errors.phone.message}</p>
            )}
          </div>
        </div>
      )}

      {/* ── Step 1: Employees ─── */}
      {step === 1 && (
        <div>
          <h3 className="font-serif text-2xl font-bold text-ink mb-2">
            How many employees do you have?
          </h3>
          <p className="text-ink/50 text-sm mb-8">Select the closest range.</p>
          <input
            type="hidden"
            {...register("employees", { required: "Please select an option" })}
          />
          <div className="space-y-3">
            {["1–10", "11–50", "51–200", "201–500", "500+"].map((opt) => (
              <button
                key={opt}
                type="button"
                className={optionBtn}
                onClick={async () => {
                  await setOptionAndContinue("employees", opt);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          {errors.employees && (
            <p className={errorClass}>{errors.employees.message}</p>
          )}
        </div>
      )}

      {/* ── Step 2: Written contracts ─── */}
      {step === 2 && (
        <div>
          <h3 className="font-serif text-2xl font-bold text-ink mb-2">
            Do you use written employment contracts with your staff?
          </h3>
          <p className="text-ink/50 text-sm mb-8">Select one.</p>
          <input
            type="hidden"
            {...register("writtenContracts", {
              required: "Please select an option",
            })}
          />
          <div className="space-y-3">
            {["Yes", "No", "Some staff only"].map((opt) => (
              <button
                key={opt}
                type="button"
                className={optionBtn}
                onClick={async () => {
                  await setOptionAndContinue("writtenContracts", opt);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 3: Last reviewed ─── */}
      {step === 3 && (
        <div>
          <h3 className="font-serif text-2xl font-bold text-ink mb-2">
            When were your contracts last professionally reviewed?
          </h3>
          <p className="text-ink/50 text-sm mb-8">Select one.</p>
          <input
            type="hidden"
            {...register("lastReviewed", {
              required: "Please select an option",
            })}
          />
          <div className="space-y-3">
            {[
              "Never",
              "Over 2 years ago",
              "Within the last 2 years",
              "Not sure",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                className={optionBtn}
                onClick={async () => {
                  await setOptionAndContinue("lastReviewed", opt);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 4: Tribunal claims ─── */}
      {step === 4 && (
        <div>
          <h3 className="font-serif text-2xl font-bold text-ink mb-2">
            Have you had any tribunal claims or disputes in the past 3 years?
          </h3>
          <p className="text-ink/50 text-sm mb-8">Select one.</p>
          <input
            type="hidden"
            {...register("tribunalClaims", {
              required: "Please select an option",
            })}
          />
          <div className="space-y-3">
            {["Yes", "No", "Not sure"].map((opt) => (
              <button
                key={opt}
                type="button"
                className={optionBtn}
                onClick={async () => {
                  await setOptionAndContinue("tribunalClaims", opt);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 5: Why now (optional) ─── */}
      {step === 5 && (
        <div>
          <h3 className="font-serif text-2xl font-bold text-ink mb-2">
            What is prompting you to look at this now?
          </h3>
          <p className="text-ink/50 text-sm mb-8">
            Optional — share as much or as little as you like.
          </p>
          <textarea
            {...register("whyNow")}
            className={`${inputClass} min-h-[140px] resize-none`}
            placeholder="e.g. recent hire, upcoming restructure, new legislation..."
          />
        </div>
      )}

      {/* ── Step 6: Preferred contact ─── */}
      {step === 6 && (
        <div>
          <h3 className="font-serif text-2xl font-bold text-ink mb-2">
            How would you prefer we contact you?
          </h3>
          <p className="text-ink/50 text-sm mb-8">Select one.</p>
          <input
            type="hidden"
            {...register("preferredContact", {
              required: "Please select an option",
            })}
          />
          <div className="space-y-3">
            {["Phone call", "Email", "Either"].map((opt) => (
              <button
                key={opt}
                type="button"
                className={optionBtn}
                onClick={async () => {
                  await setOptionAndContinue("preferredContact", opt);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 7: How did you hear + submit ─── */}
      {step === 7 && (
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-ink mb-6">
            One last thing — how did you hear about us?
          </h3>
          <div>
            <label htmlFor="howHeard" className={labelClass}>
              How did you find Blackwell Advisory?
            </label>
            <select
              id="howHeard"
              {...register("howHeard")}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="">Select one</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google Search">Google Search</option>
              <option value="Referral">Referral</option>
              <option value="Cold Email">Cold Email</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {submitError && (
            <p className="text-red-600 text-sm">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-accent text-white font-semibold py-4 rounded-sm text-lg hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </div>
      )}

      {/* Navigation buttons (for text-input steps) */}
      {step !== 7 &&
        ![1, 2, 3, 4, 6].includes(step) && (
          <div className="mt-8">
            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-accent text-white font-semibold py-4 rounded-sm text-lg hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </div>
        )}

      {/* Back button */}
      {step > 0 && (
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          className="mt-4 text-sm text-ink/45 hover:text-ink transition-colors w-full text-center"
        >
          ← Back
        </button>
      )}
    </form>
  );
}
