import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const BackToPortfolio = () => {
  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/"
          className="neu-button inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default BackToPortfolio;
