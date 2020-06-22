import React from "react";
import Join from "../Assets/Images/join.svg";
import Footer from "./Footer";
interface Props {}

const Contact = (props: Props) => {
  return (
    <>
      <div className="home">
        <div className="banner h-1">
          <div className="banner-cont">
            <p className="banner-text t2">We'd love to hear from you</p>
            <div className="w-1">
              <p className="t-3">
                Whether you have a question about what we do, or you got an idea
                to share, or anything else, our team is ready to answer.
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          <p className="heading-3 mt-3"> Join Us</p>
        </div>
        <div className="center">
          <div className="contact">
            <img className="join-icon" src={Join} alt="join-icon" />
            <p>E-mail: example@gmail.com</p>
            <p>Phone: +91 96558 65856</p>
          </div>
        </div>
      </div>
      <div className="center">
        <p className="heading-3 mt-3"> Share your idea!</p>
      </div>
      <div className="idea">
        <form className="form">
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" required />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="text" name="email" required />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone Number</label>
            <br />
            <input type="text" name="phone" required />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Share your idea</label>
            <br />
            <textarea name="idea" required />
          </div>
          <div className="btn-cont">
            <div className="c-btn m-btn">Submit</div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
