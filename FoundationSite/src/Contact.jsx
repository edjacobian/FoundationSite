import React, { useState } from 'react';
import Confetti from 'react-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Trigger confetti on form submission
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
      setSubmitted(true);
      // Your form submission logic here...
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={975}
          initialVelocityY={18}
          initialVelocityX={18}
          confettiSource={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }}
        />
      )}
      <div className="top-bar">
        <h1>Robert Berotti Memorial Foundation</h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "85px", marginLeft: "505px", backgroundColor: "#aa78ef", borderRadius: "10px", padding: "20px", display: "inline-block" }}>
        <h2 style={{ color: "white", fontSize: "xx-large"}}>Get Involved to Make A Difference!</h2>
        <h2 style={{ color: "white", fontSize: "xx-large"}}>Contact Us:</h2><br></br>
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "#1338BE" }}><a href="mailto:outreach@robertberottimemorialfoundation.org" style={{ color: "#1338BE", textDecoration: "none", fontWeight: "bold" }}>outreach@robertberottimemorialfoundation.org</a></p>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "25px", marginLeft: "600px", backgroundColor: "#aa78ef", borderRadius: "10px", padding: "20px", display: "inline-block" }}>
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
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginLeft: "32px"}}
            />
            </label><br></br>
            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
