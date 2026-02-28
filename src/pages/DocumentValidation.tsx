import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Upload, FileCheck, AlertTriangle, CheckCircle2, File } from "lucide-react";

const documentTypes = [
  { id: "passport", label: "Passport", status: "verified" },
  { id: "birth-cert", label: "Birth Certificate", status: "pending" },
  { id: "drivers", label: "Driver's License", status: "verified" },
  { id: "ssn", label: "Social Security Card", status: "missing" },
  { id: "proof-address", label: "Proof of Address", status: "verified" },
  { id: "tax-return", label: "Tax Return (Latest)", status: "pending" },
];

const statusConfig = {
  verified: { icon: CheckCircle2, color: "text-primary", bg: "bg-primary/10", label: "Verified" },
  pending: { icon: AlertTriangle, color: "text-yellow-500", bg: "bg-yellow-500/10", label: "Pending Review" },
  missing: { icon: Upload, color: "text-destructive", bg: "bg-destructive/10", label: "Not Uploaded" },
};

const DocumentValidation = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  return (
    <Layout>
      <HeroSection
        image="/images/hero-documents.jpg"
        title="Documents"
        subtitle="Secure document validation and verification for all your civic needs."
        sectionNumber="03"
      />

      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            number="01 — Validation"
            title="Document Status"
            subtitle="Track the verification status of all required documents in one place."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentTypes.map((doc, i) => {
              const config = statusConfig[doc.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;
              const isSelected = selectedDoc === doc.id;

              return (
                <GlassCard
                  key={doc.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected ? "border-primary/50 shadow-[var(--shadow-glow)]" : "hover:border-border/60"
                  }`}
                >
                  <button
                    onClick={() => setSelectedDoc(isSelected ? null : doc.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg ${config.bg} flex items-center justify-center`}>
                          <File className={`h-5 w-5 ${config.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{doc.label}</h3>
                          <span className="text-primary text-xs font-medium">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 ${config.bg} px-3 py-1.5 rounded-full`}>
                        <StatusIcon className={`h-3.5 w-3.5 ${config.color}`} />
                        <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-border/30 animate-fade-in">
                        {doc.status === "missing" ? (
                          <div className="flex items-center gap-3 p-4 rounded-lg border border-dashed border-border/50 bg-secondary/30">
                            <Upload className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Click to upload document
                            </span>
                          </div>
                        ) : doc.status === "pending" ? (
                          <p className="text-sm text-muted-foreground">
                            This document is currently under review. Expected completion: 1-2 business days.
                          </p>
                        ) : (
                          <div className="flex items-center gap-2">
                            <FileCheck className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              Verified on Feb 15, 2026. Valid until Feb 15, 2031.
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </button>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentValidation;
