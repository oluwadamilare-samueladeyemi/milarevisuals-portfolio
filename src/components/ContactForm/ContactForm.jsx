import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isFormValid =
    formData.fullName.trim() !== "" &&
    validateEmail(formData.email) &&
    formData.phone.trim() !== "" &&
    formData.service !== "" &&
    formData.message.trim().length >= 20;

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) return;

    console.log(formData);

    setSuccessMessage(
      "Thank you! Your message has been received."
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleInputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleInputChange}
      >
        <option value="">Select Service</option>
        <option>Photography</option>
        <option>Videography</option>
        <option>Documentary</option>
        <option>Content Creation</option>
        <option>Responsive Website</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell me about your project..."
        rows="6"
        value={formData.message}
        onChange={handleInputChange}
      />

      {formData.message.length > 0 &&
        formData.message.length < 20 && (
          <small className="error">
            Message must contain at least 20 characters.
          </small>
      )}

      {formData.email.length > 0 &&
        !validateEmail(formData.email) && (
          <small className="error">
            Please enter a valid email address.
          </small>
      )}

      <button
        type="submit"
        disabled={!isFormValid}
      >
        Send Message
      </button>

      {successMessage && (
        <p className="success">
          {successMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;