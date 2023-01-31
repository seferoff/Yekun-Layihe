import React, { useState } from "react";
import "./Contact.css";
import { SiWhatsapp, SiFacebook, SiInstagram } from "react-icons/si"

const Contact = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [sendButton, setSendButton] = useState("Send message");

  const getName = (e) => {
    setNameValue(e.target.value);
  };

  const getEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const getMessage = (e) => {
    setMessageValue(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    localStorage.setItem("name", nameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("message", messageValue);
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
    setSendButton("Sent");
  };

  return (
    <div className="contact">
      <main className="contact-main">
        <h1 className="contact-h1">Contact Us</h1>
        <hr />
        <div className="contact-info">
          <div className="form">
            <form
              action="user-info"
              className="user-form"
              onSubmit={sendMessage}
            >
              <div className="user-name">
                <input
                  className="name-input"
                  value={nameValue}
                  onChange={getName}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="user-email">
                <input
                  className="email-input"
                  value={emailValue}
                  onChange={getEmail}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <textarea
                className="request"
                value={messageValue}
                onChange={getMessage}
                name="request"
                id="request"
                cols="50"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className={sendButton === "Sent" ? "sent" : "send"}
                disabled={sendButton === "Sent" ? true : false}
              >
                {sendButton}
              </button>
            </form>
          </div>
          <div className="adress-info">
            <h3 className="contact-h3">Office adress:</h3>
            <p className="contact-p">Gəncə şəhəri, M.K.Atatürk pr. 253</p>
            <h3 className="contact-h3">Say hello:</h3>
            <p className="contact-p">Email: seferoff007@gmail.com</p>
          </div>
          <div className="icons">
            <button className="contact" title="+994 55 603 05 07">
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="logo" title="+994 55 603 05 07"/>
              </a>
            </button>
            <button className="contact" title="Intigam Seferoff">
              <a
                href="https://www.facebook.com/S.Intiqam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="logo"/>
              </a>
            </button>
            <button className="contact" title="Intiqam Seferoff">
              <a
                href="https://www.instagram.com/seferoff007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="logo"/>
              </a>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
