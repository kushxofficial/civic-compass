import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { FileText, UserCheck, Clock, CheckCircle, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out the required forms and submit your application through our secure portal.",
    duration: "15 minutes",
  },
  {
    icon: UserCheck,
    title: "Identity Verification",
    description: "Complete identity verification using biometric data or government-issued documents.",
    duration: "1-2 business days",
  },
  {
    icon: Clock,
    title: "Processing & Review",
    description: "Your application undergoes automated review and manual verification by authorized personnel.",
    duration: "3-5 business days",
  },
  {
    icon: CheckCircle,
    title: "Approval & Notification",
    description: "Receive your approval notification via email and SMS with next steps and documentation.",
    duration: "Instant notification",
  },
];

const Process = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/hero-office.jpg"
        title="Process"
        subtitle="A transparent, step-by-step guide through every stage of your civic application."
        sectionNumber="02"
      />

      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            number="01 — Timeline"
            title="How It Works"
            subtitle="Follow our streamlined four-step process from application to approval."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="relative">
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 md:left-8 top-full z-20 -translate-x-1/2 hidden sm:block">
                      <ArrowDown className="h-4 w-4 text-primary mt-1" />
                    </div>
                  )}
                  <GlassCard className="sm:ml-16 md:ml-20" sectionNumber={String(i + 1).padStart(2, "0")}>
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Icon circle */}
                      <div className="absolute left-0 sm:-left-10 md:-left-12 top-6 h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hidden sm:flex">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <step.icon className="h-6 w-6 text-primary sm:hidden" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
