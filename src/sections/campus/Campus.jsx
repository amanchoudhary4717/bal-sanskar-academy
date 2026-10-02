import { motion } from "framer-motion";

function Campus() {
  const facilities = [
    {
      icon: "🏫",
      title: "Classrooms",
      description:
        "A focused and welcoming environment designed to support effective classroom learning.",
      tag: "Learning",
    },
    {
      icon: "🔬",
      title: "Science & Labs",
      description:
        "Practical learning opportunities that encourage students to explore concepts through experimentation.",
      tag: "Practical Learning",
    },
    {
      icon: "📚",
      title: "Library",
      description:
        "A learning space that encourages reading, research, curiosity and independent learning.",
      tag: "Knowledge",
    },
    {
      icon: "⚽",
      title: "Sports & Activities",
      description:
        "Opportunities for students to develop teamwork, discipline, fitness and confidence.",
      tag: "Sports",
    },
    {
      icon: "🎨",
      title: "Creative Activities",
      description:
        "Activities that encourage imagination, creativity, expression and discovery of individual interests.",
      tag: "Creativity",
    },
    {
      icon: "🌱",
      title: "Learning Environment",
      description:
        "A positive environment where students are encouraged to learn, participate and grow together.",
      tag: "Growth",
    },
  ];

  return (
    <section id="campus" className="campus-section">
      <div className="campus-container">

        {/* HEADER */}
        <motion.div
          className="campus-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            CAMPUS & FACILITIES
          </span>

          <h2>
            A Place to
            <span> Learn, Explore & Grow.</span>
          </h2>

          <p>
            A supportive school environment gives students the space
            to learn inside the classroom and develop their abilities
            through practical, creative and extracurricular experiences.
          </p>
        </motion.div>

        {/* FEATURED CAMPUS AREA */}
        <motion.div
          className="campus-feature"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="campus-feature-content">
            <span className="campus-feature-label">
              OUR CAMPUS
            </span>

            <h3>
              An environment designed
              <br />
              for <span>curious minds.</span>
            </h3>

            <p>
              We believe the school environment plays an important
              role in a student's overall development. Our approach
              focuses on creating spaces and experiences that support
              learning, collaboration and personal growth.
            </p>

            <div className="campus-feature-points">
              <div>
                <span>01</span>
                <strong>Learn</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Participate</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Grow</strong>
              </div>
            </div>
          </div>

          <div className="campus-feature-visual">
            <div className="campus-visual-building">
              <div className="campus-building-roof"></div>

              <div className="campus-building-main">
                <div className="campus-building-sign">
                  BAL SANSKAR
                </div>

                <div className="campus-building-windows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="campus-building-door"></div>
              </div>
            </div>

            <div className="campus-sun-decoration"></div>
            <div className="campus-ground"></div>
          </div>
        </motion.div>

        {/* FACILITIES */}
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.article
              className="facility-card"
              key={facility.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <div className="facility-top">
                <div className="facility-icon">
                  {facility.icon}
                </div>

                <span className="facility-number">
                  0{index + 1}
                </span>
              </div>

              <span className="facility-tag">
                {facility.tag}
              </span>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>

              <div className="facility-arrow">
                <span>Explore</span>
                <span>→</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Campus;