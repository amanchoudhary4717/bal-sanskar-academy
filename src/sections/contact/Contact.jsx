import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form:", data);

    toast.success("Thank you! Your message has been received.");

    reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* HEADER */}

        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Connect With
            <span> Our School.</span>
          </h2>

          <p>
            Have a question about admissions, academics or
            school activities? Get in touch with Bal Sanskar
            Academy.
          </p>
        </motion.div>

        {/* CONTACT CONTENT */}

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-card">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <span>ADDRESS</span>

                <h3>
                  Bal Sanskar Academy
                  <br />
                  Sr. Sec. School
                </h3>

                <p>
                  Tiloniya, Kishangarh,
                  <br />
                  Ajmer - 305816,
                  <br />
                  Rajasthan, India
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                📞
              </div>

              <div>
                <span>PHONE</span>

                <h3>9982010684</h3>
                <h3>9680001312</h3>

                <p>
                  Contact the school office for
                  admissions and enquiries.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <span>EMAIL</span>

                <h3>bsatiloniya@gmail.com</h3>

                <p>
                  Send us your questions and
                  enquiries anytime.
                </p>
              </div>
            </div>

            {/* MAP */}

            <div className="contact-map">
              <iframe
                title="Bal Sanskar Academy location"
                src="https://www.google.com/maps?q=Tiloniya,Kishangarh,Ajmer,Rajasthan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form-heading">
              <span>ENQUIRY FORM</span>

              <h3>
                Send Us A Message
              </h3>

              <p>
                Fill in your details and our school
                team will get back to you.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >

              {/* NAME */}

              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                {errors.name && (
                  <small>
                    {errors.name.message}
                  </small>
                )}
              </div>

              {/* PHONE */}

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message:
                        "Enter a valid 10-digit number",
                    },
                  })}
                />

                {errors.phone && (
                  <small>
                    {errors.phone.message}
                  </small>
                )}
              </div>

              {/* EMAIL */}

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />

                {errors.email && (
                  <small>
                    {errors.email.message}
                  </small>
                )}
              </div>

              {/* SUBJECT */}

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <select
                  id="subject"
                  {...register("subject", {
                    required: "Please select a subject",
                  })}
                >
                  <option value="">
                    Select an enquiry type
                  </option>

                  <option value="admission">
                    Admission Enquiry
                  </option>

                  <option value="academic">
                    Academic Enquiry
                  </option>

                  <option value="general">
                    General Enquiry
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

                {errors.subject && (
                  <small>
                    {errors.subject.message}
                  </small>
                )}
              </div>

              {/* MESSAGE */}

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>

                {errors.message && (
                  <small>
                    {errors.message.message}
                  </small>
                )}
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Enquiry
                <span>→</span>
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;