import { motion } from "framer-motion";

function Admissions() {
  const admissionSteps = [
    {
      number: "01",
      title: "Enquiry",
      description:
        "Contact the school office or submit an admission enquiry to learn more about the admission process.",
    },
    {
      number: "02",
      title: "Application",
      description:
        "Complete the admission application with the required student and parent information.",
    },
    {
      number: "03",
      title: "Interaction",
      description:
        "The school may conduct an interaction or assessment depending on the class and admission requirements.",
    },
    {
      number: "04",
      title: "Confirmation",
      description:
        "Complete the required formalities and receive confirmation from the school.",
    },
  ];

  const documents = [
    "Student identity documents",
    "Previous academic records",
    "Passport-size photographs",
    "Parent or guardian identification",
  ];

  return (
    <section id="admissions" className="admissions-section">
      <div className="admissions-container">

        {/* HEADER */}

        <motion.div
          className="admissions-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            ADMISSIONS
          </span>

          <h2>
            Start Your Child's
            <span> Learning Journey.</span>
          </h2>

          <p>
            Learn about the admission process and connect with
            Bal Sanskar Academy for further information.
          </p>
        </motion.div>

        {/* CTA */}

        <motion.div
          className="admission-hero-card"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>ADMISSION ENQUIRY</span>

            <h3>
              Take the first step
              toward a brighter future.
            </h3>

            <p>
              Contact the school office to discuss admission
              availability, classes, requirements and other
              important information.
            </p>
          </div>

          <div className="admission-hero-actions">
            <a
              href="#contact"
              className="admission-primary-button"
            >
              Enquire Now
              <span>→</span>
            </a>

            <a
              href="tel:9982010684"
              className="admission-secondary-button"
            >
              Call School
            </a>
          </div>
        </motion.div>

        {/* PROCESS */}

        <div className="admission-content-grid">

          <motion.div
            className="admission-process"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="admission-subheading">
              <span>HOW IT WORKS</span>

              <h3>
                Admission Process
              </h3>
            </div>

            <div className="admission-steps">
              {admissionSteps.map((step, index) => (
                <motion.div
                  className="admission-step"
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="admission-step-number">
                    {step.number}
                  </div>

                  <div>
                    <h4>{step.title}</h4>

                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DOCUMENTS */}

          <motion.div
            className="admission-documents"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="admission-subheading">
              <span>PREPARATION</span>

              <h3>
                Common Documents
              </h3>
            </div>

            <p className="documents-intro">
              The exact documents required may vary by class
              and admission requirements. Please confirm the
              current requirements with the school office.
            </p>

            <div className="documents-list">
              {documents.map((document) => (
                <div
                  className="document-item"
                  key={document}
                >
                  <span className="document-check">
                    ✓
                  </span>

                  <span>{document}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="documents-button"
            >
              Ask About Admissions
              <span>→</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Admissions;
