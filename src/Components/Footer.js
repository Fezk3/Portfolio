import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Victor Segura. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/Fezk3"
                    target="_blank"
                    rel="noreferrer"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/victorsegurapereira/"
                    target="_blank"
                    rel="noreferrer"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
