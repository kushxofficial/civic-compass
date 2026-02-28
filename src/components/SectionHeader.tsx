interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ number, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <span className="text-primary font-bold text-sm tracking-widest uppercase">
        {number}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
