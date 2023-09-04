import React from 'react'
import './Projects.css'
import cartgif from "../../images/cartgif.gif"
import basicecommerce from "../../images/basicecommerce.png"
import facedesign from "../../images/facedesign.png"
import shopifyproject from "../../images/shopifyproject.png"
import gentalent from "../../images/gentalent.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Projects() {
  return (
    <div className='projects' id='projects'>
        <h2>Pro Ecommerce</h2>
        <div className="project">
                <img src={cartgif} alt="cartgif" loading='lazy' />
                <div className='project_info'>
                    <h3>MERN Project</h3>
                    <li>Create and manage your products, orders and users.</li>
                    <li>Users authentication.</li>
                    <li>Reviews on your products.</li>
                    <li>Payment Gateways</li>
                    <li>Custom designs.</li>
                    <div className='buttons-project'>
                    <a href='https://casa-qwcy.onrender.com' rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><LanguageIcon/><span>Project View</span></button>
                    </a>
                    <a href="https://github.com/gatowaton/Casa-Diaz-Project" rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><GitHubIcon/><span>Git Code</span></button>
                    </a>
                    </div>
                </div>
        </div>

        <h2>Shopify Ecommerce</h2>
        <div className="project">
                <img src={shopifyproject} alt="shopifyproject" loading='lazy'  />
                <div className='project_info'>
                    <h3>Custom sections</h3>
                    <li>Dynamics badges</li>
                    <li>Custom designs</li>
                    <li>Whatsapp web or Facebook chat</li>
                    <li>Contact Form</li>
                    <span>Pass:<strong> gato</strong></span>
                    <div className='buttons-project'>
                    <a href='https://gatowebdeveloper.myshopify.com/' rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><LanguageIcon/><span>Project View</span></button>
                    </a>
                    </div>
                </div>
        </div>

        <div className="project">
                <img src={gentalent} alt={gentalent} loading='lazy'  />
                <div className='project_info'>
                    <h3>Custom sections</h3>
                    <li>Dynamics badges</li>
                    <li>Custom designs</li>
                    <li>Whatsapp web or Facebook chat</li>
                    <li>Contact Form</li>
                    <span>Pass:<strong> gato</strong></span>
                    <div className='buttons-project'>
                    <a href='https://gentalent.onrender.com/' rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><LanguageIcon/><span>Project View</span></button>
                    </a>
                    <a href="https://github.com/gatowaton/gentalent" rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><GitHubIcon/><span>Git Code</span></button>
                    </a>
                    </div>
                </div>
        </div>

        <h2>Products Exhibition</h2>
        <div className="project">
                <img src={basicecommerce} alt="basicecommerce" loading='lazy'  />
                <div className='project_info'>
                    <h3>Show your products and sell through a sales platform</h3>
                    <li>Custom designs</li>
                    <li>Whatsapp web or Facebook chat</li>
                    <li>Contact Form</li>
                    <div className='buttons-project'>
                    <a href='https://gatowaton.github.io/react-1/' rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><LanguageIcon/><span>Project View</span></button>
                    </a>
                    <a href="https://github.com/gatowaton/react-1" rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><GitHubIcon/><span>Git Code</span></button>
                    </a>
                    </div>
                </div>
        </div>

        <h2>Designs</h2>
        <div className="project">
                <img src={facedesign} alt="facedesign" loading='lazy'  />
                <div className='project_info'>
                    <h3>Clone Designs</h3>
                    <li>Facebook Home page</li>
                    <div className='buttons-project'>
                    <a href="https://gatowaton.github.io/react-2/" rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><LanguageIcon/><span>Project View</span></button>
                    </a>
                    <a href="https://github.com/gatowaton/react-2" rel="noopener noreferrer" target={'_blank'}>
                    <button className='button-29'><GitHubIcon/><span>Git Code</span></button>
                    </a>
                    </div>
                </div>
        </div>
            
    </div>
  )
}

export default Projects