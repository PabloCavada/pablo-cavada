import React from 'react'
import "./BtnWsp.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
function BtnWsp() {
  const customIconStyle = {
    fontSize: '50px',
  };
  return (
    <div className='btns'>
        <a href='https://wa.me/56949417279' target="_BLANK" rel="noreferrer" >
        <div className='btn_wsp'>
          <WhatsAppIcon style={customIconStyle}/>  
        </div>
        </a>
        <a href='https://www.linkedin.com/in/pablo-cavada/' target="_BLANK" rel="noreferrer" >
        <div className='btn_wsp'>
        <LinkedInIcon style={customIconStyle}/>
        
        </div>
        </a>
        <a href='https://github.com/gatowaton' target="_BLANK" rel="noreferrer" >
        <div className='btn_wsp'>
          <GitHubIcon style={customIconStyle}/>
        
        </div>
        </a>
    </div>

    
  )
}

export default BtnWsp