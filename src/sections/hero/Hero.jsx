import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-background-shape hero-shape-one"></div>
      <div className="hero-background-shape hero-shape-two"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero-badge-dot"></span>

            <span>
              BAL SANSKAR ACADEMY
            </span>
          </motion.div>

          <h1>
            Building Strong
            <span> Foundations.</span>
            <br />
            Inspiring Bright
            <span> Futures.</span>
          </h1>

          <p className="hero-description">
            A place where education goes beyond textbooks,
            helping students develop knowledge, confidence,
            character and a lifelong love for learning.
          </p>

          {/* CTA BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#admissions"
              className="hero-primary-button"
            >
              Explore Admissions
              <span>→</span>
            </a>

            <a
              href="#about"
              className="hero-secondary-button"
            >
              Discover Our School
            </a>

          </div>

          {/* TRUST / STATS */}

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>01</strong>

              <span>
                Learning
                <br />
                First
              </span>
            </div>

            <div className="hero-stat">
              <strong>02</strong>

              <span>
                Student
                <br />
                Focused
              </span>
            </div>

            <div className="hero-stat">
              <strong>03</strong>

              <span>
                Future
                <br />
                Ready
              </span>
            </div>

          </div>
        </motion.div>

        {/* RIGHT VISUAL */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 45,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hero-school-image-wrapper"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/school-hero.webp"
              alt="Bal Sanskar Academy Sr. Sec. School"
              className="hero-school-image"
            />

            <div className="hero-image-overlay"></div>

            {/* FLOATING CARD 1 */}

            <motion.div
              className="real-image-card learning-card"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>🎓</span>

              <div>
                <strong>
                  Learning
                </strong>

                <small>
                  Beyond Classrooms
                </small>
              </div>
            </motion.div>

            {/* FLOATING CARD 2 */}

            <motion.div
              className="real-image-card excellence-card"
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>★</span>

              <div>
                <strong>
                  Excellence
                </strong>

                <small>
                  In Education
                </small>
              </div>
            </motion.div>

            {/* SCHOOL LABEL */}

            <div className="hero-school-label">
              <span>
                Bal Sanskar Academy
              </span>

              <small>
                Sr. Sec. School
              </small>
            </div>

          </motion.div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}

      <motion.div
        className="hero-scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 0.7,
        }}
      >
        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="hero-scroll-line"></div>
      </motion.div>

    </section>
  );
}

export default Hero;