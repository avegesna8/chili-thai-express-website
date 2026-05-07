"use client";

import { useState } from "react";

const orderUrl = "https://www.toasttab.com/local";
const logoUrl = "/assets/logo.png";

const navItems = [
  { label: "Our Food", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Rewards", href: "#rewards" },
  { label: "Visit", href: "#visit" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="Newnan Chili Thai Express home" onClick={closeMenu}>
          <object data={logoUrl} type="image/png" aria-label="Newnan Chili Thai Express logo">
            <img src="/newnan-chili-thai-logo.svg" alt="Newnan Chili Thai Express logo" />
          </object>
          <span className="brand-wordmark">
            <span className="brand-city">Newnan</span>
            <strong>Chili Thai</strong>
            <em>Express</em>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="button button-red nav-order" href={orderUrl} target="_blank" rel="noreferrer">
          Order Now
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className="mobile-menu-shell" id="mobile-menu" data-open={isMenuOpen}>
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-label="Close menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <div className="mobile-menu" aria-hidden={!isMenuOpen}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href} tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button button-red"
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
