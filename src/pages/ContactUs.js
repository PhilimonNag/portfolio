import React from 'react';
import './ContactUs.css'
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Error sending email');
        }
      })
      .catch(error => {
        console.error('Error sending email', error);
      });
  };


  return (
    <div  style={{ maxWidth: '800px', margin: '20px auto', padding: '20px',background:'#265c4d',borderRadius:'10px' }}>
        <h1 style={{color:'white'}}>Contact Us</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
