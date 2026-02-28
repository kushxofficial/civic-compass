import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const criteria = [
  { id: "age", label: "Are you 18 years or older?", required: true },
  { id: "citizen", label: "Are you a registered citizen or legal resident?", required: true },
  { id: "address", label: "Do you have a valid residential address?", required: true },
  { id: "id", label: "Do you possess a government-issued ID?", required: true },
  { id: "tax", label: "Are your tax filings up to date?", required: false },
];

const Eligibility = () => {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setSubmitted(false);
  };

  const requiredMet = criteria
    .filter((c) => c.required)
    .every((c) => answers[c.id] === true);

  return (
    <Layout>
      <HeroSection
        image="/images/hero-city.jpg"
        title="Eligibility"
        subtitle="Determine your qualification for civic services and government programs."
        sectionNumber="01"
      />

      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <SectionHeader
            number="02 — Qualification"
            title="Check Your Status"
            subtitle="Answer the following questions to determine your eligibility for our services."
          />

          <div className="flex flex-col gap-4">
            {criteria.map((item, i) => (
              <GlassCard key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-sm mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-foreground font-medium">{item.label}</p>
                    {item.required && (
                      <span className="text-primary text-xs uppercase tracking-wider">Required</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-8 sm:ml-0">
                  <button
                    onClick={() => toggle(item.id, true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      answers[item.id] === true
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => toggle(item.id, false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      answers[item.id] === false
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    No
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="mt-8 w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Submit Assessment
            <ArrowRight className="h-5 w-5" />
          </button>

          {submitted && (
            <GlassCard className="mt-8 animate-fade-up">
              {requiredMet ? (
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Eligible</h3>
                    <p className="text-muted-foreground">
                      You meet all required criteria. Proceed to the process page to begin your application.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <XCircle className="h-10 w-10 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Not Eligible</h3>
                    <p className="text-muted-foreground">
                      One or more required criteria are not met. Please review your answers or contact support.
                    </p>
                  </div>
                </div>
              )}
            </GlassCard>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Eligibility;
