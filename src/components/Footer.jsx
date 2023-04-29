import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner d-f jc-sb ai-c">
        <div className="footer-inner__Logo">
          <h2>.todayNews</h2>
        </div>
        <div className="footer-inner__contect">
          <p>Contact Us</p>
          <div className="footer-icon">
            <AiFillFacebook className="footer-icon__child" />
            <BsInstagram className="footer-icon__child" />
            <GrTwitter className="footer-icon__child" />
            <FaLinkedin className="footer-icon__child" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
