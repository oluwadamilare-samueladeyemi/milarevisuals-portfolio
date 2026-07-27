import ContactForm from "../components/ContactForm/ContactForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <h1>Get In Touch</h1>

        <p>
          Whether you're planning a wedding, corporate event,
          documentary, portrait session, or need a responsive
          website, I'd love to hear about your project.
        </p>
      </section>

      <ContactForm />

    </main>
  );
}

export default Contact;