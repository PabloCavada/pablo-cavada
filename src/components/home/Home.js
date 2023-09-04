import React from 'react';
import "./Home.css"
import Frames from "../../components/home/Frames"
import Projects from '../projects/Projects';
import BtnWsp from '../BtnWsp';



export default function Home() {
  return (
    <div>
      <BtnWsp/>
      <div className='home'>
        <div className='home_title'>
          <h1>Pablo Cavada</h1>
          <h2>Full Stack Developer</h2>
          <p>Get your own website, technical support and hosting plans, according to your needs.</p>
        </div>
      </div>
      
      <div className='back'>
       
        <h2>Projects</h2>
        <hr />
        <Projects/>
        <h2>Frameworks and Libraries</h2>
        <hr />
        <Frames/>
      </div>
    </div>
      
    
  );
}
