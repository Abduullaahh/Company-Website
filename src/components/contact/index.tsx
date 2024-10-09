import React from 'react';

const ContactForm = () => (
  <div style={styles.container} id="contact">
    <h1 style={styles.heading}>Get in touch</h1>
    <p style={styles.subHeading}>We’d love to hear from you. Please fill out this form.</p>
    <form style={styles.form}>
      <input type="text" placeholder="Name" style={styles.input} />
      <input type="email" placeholder="Company Email" style={styles.input} />
      <input type="text" placeholder="Phone Number" style={styles.input} />
      <input type="text" placeholder="Title/Position" style={styles.input} />
      <input type="text" placeholder="Subject" style={styles.input} />
      <button type="submit" style={styles.button}>
        Connect with us
      </button>
    </form>
  </div>
);

const styles = {
  container: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    padding: `50px`,
  },
  heading: {
    color: `#014C8B`,
    fontSize: `2.5rem`,
    marginBottom: `10px`,
  },
  subHeading: {
    color: `#555`,
    fontSize: `1.2rem`,
    marginBottom: `40px`,
    textAlign: `center`,
  },
  form: {
    width: `100%`,
    maxWidth: `500px`,
    display: `flex`,
    flexDirection: `column`,
    gap: `20px`,
  },
  input: {
    width: `96%`, // This ensures that the input field leaves 2% space on both sides
    padding: `10px 0`, // Adjusted padding for a cleaner look
    fontSize: `1rem`,
    border: `none`,
    borderBottom: `2px solid #ccc`, // Only bottom border
    outline: `none`, // Removes focus outline for a cleaner look
    marginLeft: `2%`, // Adds a 2% left margin to center the field
  },
  button: {
    backgroundColor: `#014C8B`,
    color: `#fff`,
    padding: `15px`,
    fontSize: `1rem`,
    border: `none`,
    borderRadius: `5px`,
    cursor: `pointer`,
    textAlign: `center`,
    marginTop: `20px`, // Adds spacing before the button
  },
};

export default ContactForm;
