import React from "react";
import Slideshow from "../../Components/Slideshow/Slideshow";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <main className="home-main">
        <div className="home-content">
          <Slideshow />
        </div>
      </main>
      <main className="contact-main">
        <h1 className="contact-h1">Contact Us</h1>
        <hr />
        <div className="contact-info">
          <div className="home-adress-info">
            <h3 className="contact-h3">Office adress:</h3>
            <p className="contact-p">Gəncə şəhəri, M.K.Atatürk pr. 253</p>
            <h3 className="contact-h3">Say hello:</h3>
            <p className="contact-p">Email: seferoff007@gmail.com</p>
            <h3 className="contact-h3">Phone number:</h3>
            <p className="contact-p">+994 55 603 05 07</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
