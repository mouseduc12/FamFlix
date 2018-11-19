import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../ComponentStyles/Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="middle">
                <div className="icons">
                    <p><FontAwesomeIcon icon={['fab', 'facebook']}/></p>
                    <p><FontAwesomeIcon icon= {['fab', 'instagram']}/></p>
                    <p><FontAwesomeIcon icon= {['fab', 'twitter']} /></p>
                    <p><FontAwesomeIcon icon= {['fab', 'youtube']} /></p>
                </div>
                <ul className="functionalities">
                    <li>Audio and Subtitles</li>
                    <li>Audio Description</li>
                    <li>Help Center</li>
                    <li>Gift Cards</li>
                    <li>Media Center</li>
                    <li>Investor Relation</li>
                    <li>Jobs</li>
                    <li>Term of Use</li>
                    <li>Privacy</li>
                    <li>Legal Notices</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                    <li>Contact Us</li>
                </ul>
                <div className="copyRight">
                    <button>Service Code</button>
                    <p>@ 1997 - 2018 Netflix, Inc()</p>
                </div>
            </div>              
        </div>
    )
}
export default Footer;