import React from "react";
import "./BtnWsp.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import { useState } from "react";
function BtnWsp() {

  const [click, setClick ] = useState(false)
  const menuClick = () => setClick(!click)



  const customIconStyle = {
    fontSize: "50px",
  };
  return (
    <div onClick={menuClick} className={click ? "btns" : "btns clicked"}>
      <a href="https://wa.me/56949417279" target="_BLANK" rel="noreferrer">
        <div className="btn_wsp">
          <WhatsAppIcon style={customIconStyle} />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/pablo-cavada/"
        target="_BLANK"
        rel="noreferrer"
      >
        <div className="btn_wsp">
          <LinkedInIcon style={customIconStyle} />
        </div>
      </a>
      <a href="https://github.com/gatowaton" target="_BLANK" rel="noreferrer">
        <div className="btn_wsp">
          <GitHubIcon style={customIconStyle} />
        </div>
      </a>
      <Link to="./contact">
        <div className="btn_wsp">
          <MailOutlineIcon style={customIconStyle}/>
        </div>
      </Link>
      <div className="btn_wsp">
        <MenuIcon style={customIconStyle}/>
      </div>
    </div>
  );
}

export default BtnWsp;
