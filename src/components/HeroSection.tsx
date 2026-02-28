interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  sectionNumber?: string;
}

const HeroSection = ({ image, title, subtitle, sectionNumber }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-gradient" />

      {sectionNumber && (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-1">
          {["01", "02", "03", "04", "05"].map((num) => (
            <span
              key={num}
              className={`text-sm font-medium transition-all ${
                num === sectionNumber
                  ? "text-foreground text-2xl font-bold"
                  : "text-muted-foreground/40"
              }`}
            >
              {num}
            </span>
          ))}
        </div>
      )}

      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-6 md:px-16 lg:px-24 container mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight animate-fade-up">
          {title.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
