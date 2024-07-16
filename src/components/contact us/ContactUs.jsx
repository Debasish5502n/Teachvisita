import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact_main">

      <div className="contact_left_content">
        <div className="contact_text_header">Contact us</div>

        <div className="contact_text_body">
          We are on hand to answer your questions. Complete the form and leave
          your contacts, our team will be in touch as soon as possible. We‘d
          love to tell you more:
        </div>

        <div className="contact_text_sub_body">☑️ This is right place for you</div>
        <div className="contact_text_sub_body">☑️ Provide price information</div>
        <div className="contact_text_sub_body">☑️ Help you to get started</div>
        <div className="contact_text_sub_body">☑️ Present our products</div>

        <div className="contact_text_details">
        📧. debasishsahoolipu12@gmail.com
        </div>
        <div className="contact_text_details" style={{margin: 0}}>
        📞. 9437706875
        </div>
      </div>

      <form className="contact_right_content">
        <div className="contact_form">
          <label className="contact_input_text" htmlFor="name">
            Name:
          </label>
          <input
            className="contact_input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label className="contact_input_text" htmlFor="email">
            Email:
          </label>
          <input
            className="contact_input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label className="contact_input_text" htmlFor="phone">
            Phone:
          </label>
          <input
            className="contact_input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your number"
            required
          />

          <label className="contact_input_text" htmlFor="phone">
            Description:
          </label>
          <textarea
            className="contact_desc"
            type="text"
            id="text"
            name="text"
            placeholder="Enter your description here..."
            required
          />

          <div className="contact_submit" onClick={""} type="submit">
            Submit
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
