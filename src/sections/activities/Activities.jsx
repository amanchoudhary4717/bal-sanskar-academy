import { motion } from "framer-motion";

function Activities() {
  const activities = [
    {
      number: "01",
      icon: "🏆",
      title: "Achievements",
      description:
        "Celebrating student accomplishments and encouraging every learner to set new goals.",
      type: "Excellence",
    },
    {
      number: "02",
      icon: "⚽",
      title: "Sports",
      description:
        "Encouraging teamwork, discipline, fitness and confidence through sporting activities.",
      type: "Sports",
    },
    {
      number: "03",
      icon: "🎨",
      title: "Arts & Culture",
      description:
        "Opportunities for students to express creativity through art, music, cultural programs and performances.",
      type: "Creativity",
    },
    {
      number: "04",
      icon: "🔬",
      title: "Academic Activities",
      description:
        "Learning experiences that encourage curiosity, practical thinking, exploration and problem solving.",
      type: "Learning",
    },
    {
      number: "05",
      icon: "🎤",
      title: "Competitions",
      description:
        "Participation in activities that help students develop communication, confidence and healthy competition.",
      type: "Participation",
    },
    {
      number: "06",
      icon: "🌟",
      title: "Student Development",
      description:
        "Building leadership, responsibility, collaboration and other skills that support students beyond academics.",
      type: "Growth",
    },
  ];

  return (
    <section id="activities" className="activities-section">
      <div className="activities-container">

        {/* HEADER */}
        <motion.div
          className="activities-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            ACTIVITIES & ACHIEVEMENTS
          </span>

          <h2>
            Every Talent Has a
            <span> Place to Shine.</span>
          </h2>

          <p>
            Education becomes more meaningful when students have the
            opportunity to participate, create, compete, collaborate
            and discover what they are capable of achieving.
          </p>
        </motion.div>

        {/* FEATURE STRIP */}
        <motion.div
          className="activities-feature"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="activities-feature-icon">
            🏅
          </div>

          <div className="activities-feature-content">
            <span>
              BEYOND THE CLASSROOM
            </span>

            <h3>
              Learn. Participate. Achieve.
            </h3>

            <p>
              We encourage students to explore their interests and
              develop confidence through academic, cultural, creative
              and extracurricular experiences.
            </p>
          </div>

          <div className="activities-feature-mark">
            <strong>∞</strong>
            <span>Possibilities</span>
          </div>
        </motion.div>

        {/* ACTIVITY CARDS */}
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.article
              className="activity-card"
              key={activity.number}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <div className="activity-card-top">
                <div className="activity-icon">
                  {activity.icon}
                </div>

                <span className="activity-number">
                  {activity.number}
                </span>
              </div>

              <span className="activity-type">
                {activity.type}
              </span>

              <h3>{activity.title}</h3>

              <p>{activity.description}</p>

              <div className="activity-line"></div>

              <div className="activity-arrow">
                <span>Discover</span>
                <span>→</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          className="activities-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span>CELEBRATING EVERY STEP FORWARD</span>

          <h3>
            Because every student's journey is worth celebrating.
          </h3>
        </motion.div>

      </div>
    </section>
  );
}

export default Activities;