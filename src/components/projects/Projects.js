import React from 'react'
import './Projects.css'
import cartgif from "../../images/cartgif.gif"
import basicecommerce from "../../images/basicecommerce.png"
import facedesign from "../../images/facedesign.png"
import shopifyproject from "../../images/shopifyproject.png"

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
                    <a href='https://gatowebdeveloper.herokuapp.com/' rel="noopener noreferrer" target={'_blank'}>
                        <button className='btn_project'>Demo</button>
                    </a>
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
                    <a href='https://gatowebdeveloper.myshopify.com/' rel="noopener noreferrer" target={'_blank'}>
                    </a>
                        <button className='btn_project'>Demo</button> <span>Pass:<strong> gato</strong></span>
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
                    <a href='https://gatowaton.github.io/react-1/' rel="noopener noreferrer" target={'_blank'}>
                        <button className='btn_project'>Demo</button>
                    </a>
                </div>
        </div>

        <h2>Designs</h2>
        <div className="project">
                <img src={facedesign} alt="facedesign" loading='lazy'  />
                <div className='project_info'>
                    <h3>Clone Designs</h3>
                    <li>Facebook Home page</li>
                    <a href='http://web4.gatowebdeveloper.com/' rel="noopener noreferrer" target={'_blank'}>
                        <button className='btn_project'>Demo</button>
                    </a>
                </div>
        </div>
            
    </div>
  )
}

export default Projects