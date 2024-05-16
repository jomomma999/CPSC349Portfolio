import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css";

//simple footer that shows on the bottom of the portoflio
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/jomomma999" target="_blank" rel="noopener noreferrer">
         <GitHubIcon/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
