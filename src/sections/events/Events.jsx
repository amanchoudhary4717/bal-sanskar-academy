import { motion } from "framer-motion";

function Events() {
  const events = [
    {
      month: "JAN",
      day: "15",
      category: "Celebration",
      title: "Annual Day Celebration",
      description:
        "A special celebration bringing together students, teachers and families to showcase talent and memorable moments.",
      time: "10:00 AM",
      location: "School Campus",
      featured: true,
    },
    {
      month: "FEB",
      day: "05",
      category: "Sports",
      title: "Annual Sports Meet",
      description:
        "A day of sporting activities designed to encourage teamwork, discipline and healthy competition.",
      time: "9:00 AM",
      location: "School Ground",
      featured: false,
    },
    {
      month: "MAR",
      day: "12",
      category: "Academic",
      title: "Science Exhibition",
      description:
        "Students present creative projects and ideas while exploring science through practical learning.",
      time: "11:00 AM",
      location: "School Campus",
      featured: false,
    },
    {
      month: "APR",
      day: "20",
      category: "Cultural",
      title: "Cultural Programme",
      description:
        "A celebration of creativity and culture featuring student performances and activities.",
      time: "10:30 AM",
      location: "School Auditorium",
      featured: false,
    },
  ];

  return (
    <section id="events" className="events-section">
      <div className="events-container">

        {/* HEADER */}
        <motion.div
          className="events-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-label">
              SCHOOL EVENTS
            </span>

            <h2>
              Moments Worth
              <span> Remembering.</span>
            </h2>
          </div>

          <p>
            Stay connected with school activities, celebrations,
            competitions and important events happening throughout
            the academic year.
          </p>
        </motion.div>

        {/* FEATURED EVENT */}
        {events
          .filter((event) => event.featured)
          .map((event) => (
            <motion.div
              className="featured-event"
              key={event.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              <div className="featured-event-date">
                <span>{event.month}</span>
                <strong>{event.day}</strong>
              </div>

              <div className="featured-event-content">
                <span className="event-category">
                  {event.category}
                </span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <div className="event-meta">
                  <span>
                    🕐 {event.time}
                  </span>

                  <span>
                    📍 {event.location}
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="event-button"
              >
                Event Details
                <span>→</span>
              </a>
            </motion.div>
          ))}

        {/* EVENTS LIST */}
        <div className="events-list">
          {events
            .filter((event) => !event.featured)
            .map((event, index) => (
              <motion.article
                className="event-card"
                key={event.title}
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
                <div className="event-date">
                  <span>{event.month}</span>
                  <strong>{event.day}</strong>
                </div>

                <div className="event-card-content">
                  <span className="event-category">
                    {event.category}
                  </span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <div className="event-meta">
                    <span>
                      🕐 {event.time}
                    </span>

                    <span>
                      📍 {event.location}
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="event-card-arrow"
                  aria-label={`View details for ${event.title}`}
                >
                  →
                </a>
              </motion.article>
            ))}
        </div>

        {/* FUTURE EVENT MANAGEMENT MESSAGE */}
        <motion.div
          className="events-footer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span>
            STAY CONNECTED WITH SCHOOL LIFE
          </span>

          <p>
            Upcoming events, announcements and important school
            activities will appear here.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Events;