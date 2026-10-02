function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <div className="footer-logo-mark">
              BS
            </div>

            <div>
              <strong>
                Bal Sanskar Academy
              </strong>

              <span>
                Sr. Sec. School
              </span>
            </div>
          </a>

          <p>
            Building strong foundations for learning,
            character and a brighter future.
          </p>

          <a
            href="#parent-portal"
            className="footer-parent-button"
          >
            Parent Portal
            <span>→</span>
          </a>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus</a>
          <a href="#activities">Activities</a>

        </div>

        {/* SCHOOL */}

        <div className="footer-column">

          <h3>
            School
          </h3>

          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#contact">Contact</a>
          <a href="#parent-portal">
            Parent Portal
          </a>

        </div>

        {/* CONTACT */}

        <div className="footer-column footer-contact">

          <h3>
            Contact Us
          </h3>

          <p>
            📍 Tiloniya, Kishangarh,
            <br />
            Ajmer - 305816,
            <br />
            Rajasthan, India
          </p>

          <a href="tel:9982010684">
            📞 9982010684
          </a>

          <a href="tel:9680001312">
            📞 9680001312
          </a>

          <a href="mailto:bsatiloniya@gmail.com">
            ✉️ bsatiloniya@gmail.com
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear} Bal Sanskar Academy
            Sr. Sec. School. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;