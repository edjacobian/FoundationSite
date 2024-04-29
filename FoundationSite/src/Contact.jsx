import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [audienceId, setAudienceId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createAudience = async () => {
    try {
      const response = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://api.mailchimp.com/3.0/lists',
        {
          name: 'Your Audience Name',
          contact: {
            company: 'Your Company Name',
            address1: 'Your Address Line 1',
            city: 'Your City',
            state: 'Your State',
            zip: 'Your ZIP Code',
            country: 'Your Country'
          },
          permission_reminder: 'You are receiving this email because...',
          campaign_defaults: {
            from_name: 'Your Name',
            from_email: 'your@email.com',
            subject: 'Your Subject',
            language: 'Your Language'
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ef7d5042304651d09d5cf90c81713a41-us18'
          }
        }
      );
      const id = response.data.id;
      setAudienceId(id);
      console.log('Audience created with ID:', id);
    } catch (error) {
      console.error('Error creating audience:', error);
    }
  };

  const addContactToAudience = async () => {
    try {
      await axios.post(
        `https://cors-anywhere.herokuapp.com/https://api.mailchimp.com/3.0/lists/${audienceId}/members`,
        {
          email_address: formData.email,
          status: 'subscribed',
          merge_fields: {
            FNAME: formData.firstName,
            LNAME: formData.lastName
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ef7d5042304651d09d5cf90c81713a41-us18'
          }
        }
      );
      setSubmitted(true);
      console.log('Contact added to audience:', formData.email);
    } catch (error) {
      console.error('Error adding contact to audience:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAudience();
      await addContactToAudience();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <div className="top-bar">
        <h1>Robert Berotti Memorial Foundation</h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "145px", marginLeft: "350px", backgroundColor: "#aa78ef", borderRadius: "10px", padding: "20px", display: "inline-block" }}>
        <h2 style={{ color: "white", fontSize: "xx-large"}}>Get Involved to Make A Difference!</h2>
        <h2 style={{ color: "white", fontSize: "xx-large"}}>Contact Us:</h2><br></br>
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "#1338BE" }}><a href="mailto:outreach@robertberottimemorialfoundation.org" style={{ color: "#1338BE", textDecoration: "none", fontWeight: "bold" }}>outreach@robertberottimemorialfoundation.org</a></p>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "25px", marginLeft: "425px", backgroundColor: "#aa78ef", borderRadius: "10px", padding: "20px", display: "inline-block" }}>
        <h2 style={{ fontSize: "xx-large", color: "white"}}>Join Our Mailing List</h2>
        {submitted ? (
          <p style={{ color: "white" }}>Thank you for subscribing!</p>
        ) : (
          <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label><br></br>
            <label>
              Last Name:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label><br></br>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label><br></br>
            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
      </div>
  );
}

export default Contact;
