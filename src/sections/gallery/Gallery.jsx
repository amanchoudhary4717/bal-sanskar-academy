import { motion } from "framer-motion";

function Gallery() {
  const galleryItems = [
    {
      image: "/images/gallery-1.webp",
      title: "School Campus",
      category: "Campus",
    },
    {
      image: "/images/gallery-2.webp",
      title: "Learning Together",
      category: "Academics",
    },
    {
      image: "/images/gallery-3.webp",
      title: "Sports Activities",
      category: "Sports",
    },
    {
      image: "/images/gallery-4.webp",
      title: "Student Activities",
      category: "Activities",
    },
    {
      image: "/images/gallery-5.webp",
      title: "School Celebrations",
      category: "Events",
    },
    {
      image: "/images/gallery-6.webp",
      title: "Creative Learning",
      category: "Activities",
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">

        {/* HEADER */}
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-label">
              SCHOOL GALLERY
            </span>

            <h2>
              Moments That
              <span> Tell Our Story.</span>
            </h2>
          </div>

          <p>
            Explore memorable moments from campus life,
            learning activities, celebrations, sports and
            student experiences.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.article
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.title}
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
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <div className="gallery-arrow">
                  →
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          className="gallery-footer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#contact" className="gallery-button">
            Explore School Life
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;