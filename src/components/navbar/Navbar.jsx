import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Campus", href: "#campus" },
  { name: "Activities", href: "#activities" },
  { name: "Events", href: "#events" },
  { name: "Admissions", href: "#admissions" },
  { name: "Gallery", href: "#gallery" },
  { name: "Videos", href: "#videos" },
  { name: "Contact", href: "#contact" },
];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <nav className="navbar-container">

        {/* ==================== */}
        {/* LOGO */}
        {/* ==================== */}

        <a
          href="#home"
          className="school-brand"
          onClick={closeMenu}
        >
          <div className="school-logo">
            BS
          </div>

          <div className="school-name">
            <h1>Bal Sanskar Academy</h1>
            <span>Sr. Sec. School</span>
          </div>
        </a>


        {/* ==================== */}
        {/* DESKTOP NAVIGATION */}
        {/* ==================== */}

        <div className="desktop-navigation">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}

        </div>


        {/* ==================== */}
        {/* MOBILE MENU BUTTON */}
        {/* ==================== */}

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>


      {/* ==================== */}
      {/* MOBILE NAVIGATION */}
      {/* ==================== */}

      <div
        className={`mobile-navigation ${
          menuOpen ? "mobile-navigation-open" : ""
        }`}
      >

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {item.name}
          </a>
        ))}

      </div>

    </header>
  );
}

export default Navbar;