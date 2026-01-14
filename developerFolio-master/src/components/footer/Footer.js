import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  useContext(StyleContext); // keep context if required globally

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p>
          <a
            href="https://github.com/nishayadav4245"
            target="_blank"
            rel="noreferrer"
          >
            {/* Add text or icon here */}
            GitHub
          </a>
        </p>
      </div>
    </Fade>
  );
}
