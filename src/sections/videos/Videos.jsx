import { motion } from "framer-motion";

function Videos() {
  const videos = [
    {
      title: "Welcome to Bal Sanskar Academy",
      category: "School Life",
      duration: "03:24",
      image: "/images/video-1.webp",
      featured: true,
    },
    {
      title: "Annual Day Celebration",
      category: "Events",
      duration: "05:18",
      image: "/images/video-2.webp",
      featured: false,
    },
    {
      title: "Sports & Activities",
      category: "Sports",
      duration: "04:12",
      image: "/images/video-3.webp",
      featured: false,
    },
    {
      title: "Learning Beyond Classrooms",
      category: "Academics",
      duration: "02:48",
      image: "/images/video-4.webp",
      featured: false,
    },
  ];

  return (
    <section id="videos" className="videos-section">
      <div className="videos-container">

        {/* HEADER */}

        <motion.div
          className="videos-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-label">
              SCHOOL VIDEOS
            </span>

            <h2>
              See Our School
              <span> In Action.</span>
            </h2>
          </div>

          <p>
            Discover school life through videos featuring
            learning, celebrations, activities, sports and
            memorable moments.
          </p>
        </motion.div>

        {/* FEATURED VIDEO */}

        {videos
          .filter((video) => video.featured)
          .map((video) => (
            <motion.div
              className="featured-video"
              key={video.title}
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
                duration: 0.7,
              }}
            >
              <div className="featured-video-image">
                <img
                  src={video.image}
                  alt={video.title}
                  loading="lazy"
                />

                <div className="video-overlay"></div>

                <button
                  className="video-play-button"
                  aria-label={`Play ${video.title}`}
                >
                  <span>▶</span>
                </button>

                <div className="video-duration">
                  {video.duration}
                </div>
              </div>

              <div className="featured-video-content">
                <span className="video-category">
                  {video.category}
                </span>

                <h3>{video.title}</h3>

                <p>
                  Experience the spirit of Bal Sanskar Academy
                  through memorable moments from our school
                  community.
                </p>

                <button className="watch-video-button">
                  Watch Video
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}

        {/* VIDEO CARDS */}

        <div className="videos-grid">
          {videos
            .filter((video) => !video.featured)
            .map((video, index) => (
              <motion.article
                className="video-card"
                key={video.title}
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
                  delay: index * 0.1,
                }}
              >
                <div className="video-card-image">
                  <img
                    src={video.image}
                    alt={video.title}
                    loading="lazy"
                  />

                  <div className="video-card-overlay"></div>

                  <button
                    className="small-play-button"
                    aria-label={`Play ${video.title}`}
                  >
                    ▶
                  </button>

                  <span className="video-card-duration">
                    {video.duration}
                  </span>
                </div>

                <div className="video-card-content">
                  <span className="video-category">
                    {video.category}
                  </span>

                  <h3>{video.title}</h3>

                  <button className="video-card-link">
                    Watch Video
                    <span>→</span>
                  </button>
                </div>
              </motion.article>
            ))}
        </div>

        {/* FOOTER */}

        <motion.div
          className="videos-footer"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p>
            More school videos and event highlights will be
            added here.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Videos;