import { motion } from "framer-motion";

function Academics() {
  const academicLevels = [
    {
      number: "01",
      icon: "🌱",
      title: "Primary Education",
      subtitle: "Building Strong Foundations",
      description:
        "A supportive learning environment where students develop strong fundamentals, curiosity, communication and essential learning habits.",
      subjects: [
        "Foundational Learning",
        "Language Development",
        "Mathematics",
        "Environmental Awareness",
      ],
    },
    {
      number: "02",
      icon: "📚",
      title: "Middle School",
      subtitle: "Discovering New Possibilities",
      description:
        "Students expand their knowledge, develop analytical thinking and begin exploring their interests through broader academic experiences.",
      subjects: [
        "Science & Mathematics",
        "Languages",
        "Social Studies",
        "Creative Learning",
      ],
    },
    {
      number: "03",
      icon: "🔬",
      title: "Secondary Education",
      subtitle: "Preparing for the Future",
      description:
        "Focused academic development combined with problem-solving, discipline and skills that prepare students for higher education.",
      subjects: [
        "Science",
        "Mathematics",
        "Social Sciences",
        "Languages",
      ],
    },
    {
      number: "04",
      icon: "🎓",
      title: "Senior Secondary",
      subtitle: "Pathways to Tomorrow",
      description:
        "Students receive focused academic guidance and opportunities to prepare for higher studies and their future career goals.",
      subjects: [
        "Stream-Based Learning",
        "Advanced Subjects",
        "Career Guidance",
        "Exam Preparation",
      ],
    },
  ];

  return (
    <section id="academics" className="academics-section">
      <div className="academics-container">

        {/* HEADER */}
        <motion.div
          className="academics-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            ACADEMICS
          </span>

          <h2>
            Learning Today.
            <span> Leading Tomorrow.</span>
          </h2>

          <p>
            We aim to create meaningful learning experiences that
            encourage students to understand concepts, ask questions,
            solve problems and develop the confidence to move forward.
          </p>
        </motion.div>

        {/* ACADEMIC CARDS */}
        <div className="academic-grid">
          {academicLevels.map((level, index) => (
            <motion.article
              className="academic-card"
              key={level.number}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="academic-card-top">
                <span className="academic-number">
                  {level.number}
                </span>

                <span className="academic-icon">
                  {level.icon}
                </span>
              </div>

              <h3>{level.title}</h3>

              <h4>{level.subtitle}</h4>

              <p>{level.description}</p>

              <div className="academic-subjects">
                {level.subjects.map((subject) => (
                  <span key={subject}>
                    <i>✓</i>
                    {subject}
                  </span>
                ))}
              </div>

              <div className="academic-card-line"></div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="academics-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>EDUCATION WITH PURPOSE</span>

            <h3>
              Helping every student discover their potential.
            </h3>
          </div>

          <a href="#admissions" className="academics-button">
            Explore Admissions
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Academics;