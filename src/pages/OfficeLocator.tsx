import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { MapPin, Clock, Phone, Users } from "lucide-react";

const offices = [
  {
    name: "Downtown Civic Center",
    address: "100 Main Street, Downtown District",
    hours: "Mon-Fri 8:00 AM - 6:00 PM",
    phone: "(555) 100-2000",
    waitTime: "~15 min",
    capacity: "Low",
  },
  {
    name: "Westside Government Hub",
    address: "450 West Boulevard, Suite 200",
    hours: "Mon-Fri 9:00 AM - 5:00 PM",
    phone: "(555) 200-3000",
    waitTime: "~30 min",
    capacity: "Medium",
  },
  {
    name: "Northgate Service Center",
    address: "780 North Avenue, Building C",
    hours: "Mon-Sat 8:00 AM - 4:00 PM",
    phone: "(555) 300-4000",
    waitTime: "~5 min",
    capacity: "Low",
  },
  {
    name: "Eastpoint Regional Office",
    address: "1200 East Park Drive",
    hours: "Mon-Fri 8:30 AM - 5:30 PM",
    phone: "(555) 400-5000",
    waitTime: "~45 min",
    capacity: "High",
  },
];

const capacityColor = {
  Low: "text-primary",
  Medium: "text-yellow-500",
  High: "text-destructive",
};

const OfficeLocator = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/hero-home.jpg"
        title="Offices"
        subtitle="Locate the nearest government service center with live availability."
        sectionNumber="04"
      />

      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            number="01 — Locations"
            title="Find An Office"
            subtitle="Browse available service centers with real-time wait times and capacity."
          />

          <div className="flex flex-col gap-6">
            {offices.map((office, i) => (
              <GlassCard key={office.name} sectionNumber={String(i + 1).padStart(2, "0")} className="hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{office.name}</h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        {office.address}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        {office.hours}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        {office.phone}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 lg:gap-6">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Wait</p>
                      <p className="text-lg font-bold text-foreground">{office.waitTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Capacity</p>
                      <div className="flex items-center gap-1.5">
                        <Users className={`h-4 w-4 ${capacityColor[office.capacity as keyof typeof capacityColor]}`} />
                        <p className={`text-lg font-bold ${capacityColor[office.capacity as keyof typeof capacityColor]}`}>
                          {office.capacity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OfficeLocator;
