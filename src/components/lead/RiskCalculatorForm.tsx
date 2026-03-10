"use client";

import { useEffect, useRef, useState } from "react";

type AnswerMap = Record<string, string>;

const questions = [
  { key: "company", label: "Company name", type: "text" as const, options: [] },
  { key: "employees", label: "Number of employees", type: "select" as const, options: ["1-10", "11-50", "51-200", "201+"] },
  { key: "writtenContracts", label: "Do you use written employment contracts?", type: "select" as const, options: ["Yes", "No", "Some staff only"] },
  { key: "disciplinaryProcedure", label: "Do you have disciplinary and grievance procedures?", type: "select" as const, options: ["Yes", "No", "Partially"] },
  { key: "ongoingDisputes", label: "Any ongoing workplace disputes?", type: "select" as const, options: ["Yes", "No"] },
  { key: "tribunalClaims", label: "Any tribunal claims in the last 3 years?", type: "select" as const, options: ["Yes", "No", "Not sure"] },
  { key: "staffHandbook", label: "Do you have an up-to-date staff handbook?", type: "select" as const, options: ["Yes", "No", "Not sure"] },
];

const scoreWeights: Record<string, Record<string, number>> = {
  employees: { "1-10": 0, "11-50": 1, "51-200": 2, "201+": 3 },
  writtenContracts: { Yes: 0, "Some staff only": 2, No: 4 },
  disciplinaryProcedure: { Yes: 0, Partially: 2, No: 4 },
  ongoingDisputes: { No: 0, Yes: 4 },
  tribunalClaims: { No: 0, "Not sure": 2, Yes: 4 },
  staffHandbook: { Yes: 0, "Not sure": 2, No: 3 },
};

function getRiskBand(score: number) {
  if (score <= 5) return { label: "Low", summary: "Your baseline controls appear reasonable, but periodic review is still advisable." };
  if (score <= 11) return { label: "Medium", summary: "There are visible gaps that could become costly if disputes escalate." };
  return { label: "High", summary: "Your current profile suggests elevated tribunal and compliance risk. Early remediation is recommended." };
}

export default function RiskCalculatorForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [result, setResult] = useState<{ score: number; label: string; summary: string } | null>(null);
  const startedAtRef = useRef(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const currentQuestion = questions[step];

  const computeScore = (finalAnswers: AnswerMap) =>
    Object.entries(finalAnswers).reduce((total, [key, value]) => total + (scoreWeights[key]?.[value] ?? 0), 0);

  const submit = async (finalAnswers: AnswerMap) => {
    setStatus("submitting");
    const score = computeScore(finalAnswers);
    const band = getRiskBand(score);

    const response = await fetch("/api/risk-assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...contact,
        company: finalAnswers.company,
        answers: finalAnswers,
        riskScore: score,
        riskBand: band.label,
        source: "risk-calculator",
        website: "",
        completionMs: Date.now() - startedAtRef.current,
      }),
    });

    if (response.ok) {
      setResult({ score, ...band });
      setStatus("done");
      return;
    }

    setStatus("error");
  };

  if (status === "done" && result) {
    return (
      <div className="bg-cream border border-muted rounded-xl p-8">
        <h2 className="font-serif text-3xl font-bold text-navy mb-2">Your Risk Score: {result.score}</h2>
        <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-3">{result.label} Risk</p>
        <p className="text-navy/70 mb-7">{result.summary}</p>
        <a href="/contact" className="inline-block bg-gold text-navy font-semibold px-6 py-3 rounded hover:opacity-90">Book a Compliance Review</a>
      </div>
    );
  }

  return (
    <div className="bg-white border border-muted rounded-xl p-8">
      <p className="text-xs uppercase tracking-widest text-navy/50 mb-2">Step {Math.min(step + 1, questions.length + 1)} of {questions.length + 1}</p>
      {step < questions.length ? (
        <div>
          <h2 className="font-serif text-2xl font-bold text-navy mb-5">{currentQuestion.label}</h2>
          {currentQuestion.type === "text" ? (
            <input
              className="w-full border border-muted rounded px-4 py-3"
              value={answers[currentQuestion.key] ?? ""}
              onChange={(event) => setAnswers((prev) => ({ ...prev, [currentQuestion.key]: event.target.value }))}
            />
          ) : (
            <div className="space-y-2">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="w-full text-left border border-muted rounded px-4 py-3 hover:border-gold"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, [currentQuestion.key]: option }));
                    setStep((s) => s + 1);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          {currentQuestion.type === "text" && (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="mt-5 bg-navy text-white font-semibold px-5 py-2.5 rounded"
              disabled={!answers[currentQuestion.key]}
            >
              Continue
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-navy">Where should we send your result summary?</h2>
          <input placeholder="Full name" className="w-full border border-muted rounded px-4 py-3" value={contact.name} onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))} />
          <input placeholder="Email" type="email" className="w-full border border-muted rounded px-4 py-3" value={contact.email} onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))} />
          <input placeholder="Phone (optional)" className="w-full border border-muted rounded px-4 py-3" value={contact.phone} onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))} />
          {status === "error" && <p className="text-red-700 text-sm">Could not submit right now. Please try again.</p>}
          <button type="button" onClick={() => submit(answers)} disabled={!contact.name || !contact.email || status === "submitting"} className="w-full bg-gold text-navy font-semibold px-5 py-3 rounded disabled:opacity-70">
            {status === "submitting" ? "Submitting..." : "Show my risk result"}
          </button>
        </div>
      )}
      {step > 0 && step < questions.length + 1 && (
        <button type="button" className="mt-4 text-sm text-navy/50" onClick={() => setStep((s) => s - 1)}>
          ← Back
        </button>
      )}
    </div>
  );
}
