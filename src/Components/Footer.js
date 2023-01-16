import React from "react";
import "../StyleComponent/HeaderStyle.css";
import { FaYoutube, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contect-short">
          <div className="short">
            <h3>Ready to get started</h3>
          </div>
        </div>
        <div className="">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_divya"
                title="click me"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/ "
                target="_divya"
                title="click me"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/ "
                target="_divya"
                title="click me"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
