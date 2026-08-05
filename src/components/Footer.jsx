import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black dark:bg-transparent dark:text-white-100 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-5 flex justify-center">
        <p className="font-serif text-[13px] sm:text-[14px] text-black/70 dark:text-white-100 text-center">
          Last updated August 2026
          <span className="font-serif mx-1.5 text-black/30 dark:text-secondary">·</span>
          <span className="font-serif whitespace-nowrap">&copy; 2026 Shufan's Homepage</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
