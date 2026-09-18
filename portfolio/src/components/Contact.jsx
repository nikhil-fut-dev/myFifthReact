import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message submitted successfully!");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <p>Get In Touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's work together</h3>

            <p>
              Have a project idea or want to work together? Feel free to send me
              a message.
            </p>

            <div className="contact-item">
              <div>
                <FiMail />
              </div>

              <div>
                <span>Email</span>
                <p>your@email.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div>
                <FiPhone />
              </div>

              <div>
                <span>Phone</span>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <div>
                <FiMapPin />
              </div>

              <div>
                <span>Location</span>
                <p>India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Subject" required />

            <textarea placeholder="Your Message" rows="6" required></textarea>

            <button type="submit" className="btn primary-btn">
              Send Message
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
