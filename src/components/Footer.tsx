import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CA</span>
              </div>
              <span className="text-foreground font-bold text-lg">Citizen Access</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your modern gateway to civic services and government processes.
            </p>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Eligibility", path: "/eligibility" },
                { label: "Process", path: "/process" },
                { label: "Documents", path: "/documents" },
                { label: "Offices", path: "/offices" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <p className="text-muted-foreground text-sm">support@citizenaccess.gov</p>
            <p className="text-muted-foreground text-sm mt-1">1-800-CITIZEN</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Citizen Access & Process Navigator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
