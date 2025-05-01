import { useState } from "react";
import "../static/Home.css";
import { addContact } from "../api/memberApi";
import demo2 from "../assets/demo2.jpg";
import { useUser } from "@clerk/clerk-react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { isLoaded, isSignedIn, user } = useUser();

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_3i5wri6",
        "template_uthho6k",
        {
          to_email: isSignedIn
            ? user.primaryEmailAddress.emailAddress
            : formData.email,
          message: "Thanks for connect with us",
        },
        "jmSSgqxMuxY2CmROC"
      );
      await addContact(formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  }

  if (!isLoaded) return <h1>Lodding...</h1>;

  return (
    <>
      <div className="main" style={{ backgroundColor: "black" }}>
        <div className="section-img">
          <img
            className="contactimage2"
            src={demo2}
            alt=""
            style={{ width: "100%", height: "850px" }}
          />
          <div className="text-center contact-text">
            <h1>
              Have questions or
              <br />
              want to get in touch
              <br />
              with us?
            </h1>
            <p>Meet Our Expert Gym Trainers: Your Guides to Fitness Success</p>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <p style={{ color: "#E4B802", fontSize: "20px" }}>
              Location and Map
            </p>
            <p>
              Google Maps embed showing the location{" "}
              <span style={{ color: "#E4B802", fontSize: "20px" }}>
                Prime Fit
              </span>{" "}
              of gym
            </p>
            {/* <img
                            src={location}
                            alt=""
                            style={{ height: "500px", width: "80%", margin: "auto" }}
                        /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8876348524177!2d72.5490542750919!3d23.027897579170087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e3242d0db3%3A0x66aa805dda7ce3ac!2sTechtic%20Technolab%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1744095711636!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="row">
            <div className="col-6 mt-5">
              <div
                className="btn"
                style={{
                  backgroundColor: "#E4B802",
                  width: "15%",
                  borderRadius: "25px",
                }}
              >
                ContactUs
              </div>
              <p style={{ fontSize: "30px", color: "#FFFFFF" }}>Contact Form</p>
              <p>
                Fill out the form below, and one of our friendly team
                <br /> members will get back to you shortly
              </p>
              <p
                style={{
                  fontSize: "30px",
                  color: "#FFFFFF",
                  marginTop: "30px",
                }}
              >
                Follow Us on Social Media
              </p>
              <div className="iconlist">
                <i className="bi bi-instagram me-5 fs-2"></i>
                <i className="bi bi-twitter-x me-5 fs-2"></i>
                <i className="bi bi-facebook me-5 fs-2"></i>
                <i className="bi bi-linkedin me-5 fs-2"></i>
              </div>
              <div className="contact-box bg-warning mt-4 rounded-3 p-4">
                <h3>
                  You can email us here <br />
                  support@fitfusion.com
                </h3>
              </div>
              <div className="contact-box bg-warning mt-4 rounded-3 p-4">
                <h3>
                  Give us a call on <br />
                  +91 00000 00000
                </h3>
              </div>
              <div className="contact-box bg-warning mt-4 rounded-3 p-4">
                <h3>
                  Office Hours <br />
                  9:00 am - 6:00 pm
                </h3>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div
                className="contact-form p-5 mt-5 ms-5"
                style={{ borderRadius: "25px" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Name
                    </span>
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      placeholder="Your Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Email
                    </span>
                    <input
                      type="email"
                      className="form-control bg-dark text-light"
                      placeholder="Your Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      name="email"
                      value={
                        !isSignedIn
                          ? formData.email
                          : user.primaryEmailAddress.emailAddress
                      }
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Address
                    </span>
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      placeholder="Subject"
                      aria-label="Subject"
                      aria-describedby="basic-addon1"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Message
                    </span>
                    <textarea
                      className="form-control bg-dark text-light"
                      placeholder="Your Message"
                      aria-label="Message"
                      aria-describedby="basic-addon1"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                    />
                  </div>
                  <button className="btn btn-success" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
