import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  sectionNumber?: string;
}

const GlassCard = ({ children, className = "", sectionNumber }: GlassCardProps) => {
  return (
    <div className={`glass-card rounded-xl p-6 md:p-8 relative overflow-hidden ${className}`}>
      {sectionNumber && (
        <span className="section-number absolute -top-4 -left-2 select-none pointer-events-none">
          {sectionNumber}
        </span>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
