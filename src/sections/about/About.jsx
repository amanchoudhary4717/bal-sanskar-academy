import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Holistic Education",
      text: "We focus on academics, character, confidence, creativity and life skills.",
    },
    {
      icon: "👨‍🏫",
      title: "Dedicated Teachers",
      text: "Our educators work closely with students to support their learning journey.",
    },
    {
      icon: "🌱",
      title: "Growing Together",
      text: "We encourage curiosity, discipline, responsibility and a positive mindset.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* SECTION HEADER */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            ABOUT OUR SCHOOL
          </span>

          <h2>
            Building a Strong
            <span> Foundation for Life</span>
          </h2>

          <p>
            At Bal Sanskar Academy Sr. Sec. School, we believe that
            education is more than textbooks and examinations. It is
            about developing confident, responsible and compassionate
            individuals who are prepared for the future.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="about-main">

          {/* LEFT VISUAL */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-card">

             <div className="about-image-placeholder">
  <img
    src="/images/school-about.webp"
    alt="Bal Sanskar Academy school campus"
    className="about-school-image"
  />

  <div className="about-image-caption">
    <strong>Bal Sanskar Academy</strong>
    <span>Sr. Sec. School</span>
  </div>
</div>

              <div className="about-experience-card">
                <strong>22+</strong>
                <span>Years of<br />Educational Journey</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-small-title">
              OUR APPROACH
            </span>

            <h3>
              Education that inspires
              <span> curiosity and confidence.</span>
            </h3>

            <p>
              Our aim is to create an environment where every student
              feels encouraged to learn, explore and grow. We combine
              academic development with values, discipline,
              creativity and practical learning.
            </p>

            <p>
              From the classroom to extracurricular activities, we
              strive to provide students with opportunities to discover
              their strengths and develop the confidence to face new
              challenges.
            </p>

            <a
              href="#academics"
              className="about-button"
            >
              Discover Our Academics
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="about-highlights">

          {highlights.map((item, index) => (
            <motion.div
              className="about-highlight"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="highlight-icon">
                {item.icon}
              </div>

              <div>
                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;