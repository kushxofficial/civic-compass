import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { ArrowRight, Shield, FileCheck, MapPin, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Eligibility Check",
    description: "Verify your qualifications for civic services and programs instantly.",
    link: "/eligibility",
  },
  {
    icon: FileCheck,
    title: "Document Validation",
    description: "Authenticate and validate your documents with our secure verification system.",
    link: "/documents",
  },
  {
    icon: MapPin,
    title: "Office Locator",
    description: "Find the nearest government office with real-time availability information.",
    link: "/offices",
  },
];

const stats = [
  { value: "2.4M+", label: "Citizens Served" },
  { value: "98.7%", label: "Approval Rate" },
  { value: "24/7", label: "Digital Access" },
  { value: "150+", label: "Service Centers" },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/hero-home.jpg"
        title="Citizen Access"
        subtitle="Navigate government services with clarity, speed, and confidence. Your modern gateway to civic processes."
        sectionNumber="01"
      />

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <SectionHeader
            number="02 — Services"
            title="Your Pathway"
            subtitle="Streamlined access to essential government services, designed for the modern citizen."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link key={service.title} to={service.link}>
                <GlassCard className="h-full group hover:border-primary/30 transition-all duration-500 cursor-pointer" sectionNumber={`0${i + 1}`}>
                  <service.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 md:py-32 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/images/hero-city.jpg)" }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto relative z-10">
          <SectionHeader number="03 — Impact" title="By The Numbers" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto text-center">
          <SectionHeader
            number="04 — Get Started"
            title="Begin Your Journey"
            subtitle="Start navigating civic processes with confidence today."
          />
          <Link
            to="/eligibility"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <CheckCircle className="h-5 w-5" />
            Check Eligibility
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
