import React from 'react'
import js from "../../images/js.png"
import css from "../../images/css.png"
import react from "../../images/react.png"
import node from "../../images/node.png"
import mongo from "../../images/mongo.png"
import docker from "../../images/docker.png";
import git from "../../images/git.png";
import java from "../../images/java.png";
import python from "../../images/python.png";
import shopify from "../../images/shopify.png";
import sql from "../../images/sql.png";
import ubuntu from "../../images/ubuntu.png";
import aws from "../../images/aws.png";
import tailwind from "../../images/tailwind.png";
import bootstrap from "../../images/bootstrap.png";
import html from "../../images/html.png";
import "./Frames.css"

function Frames() {
  return (
    <div className='img-container'>
      <div>
        <img src={js} alt="js"/>
      </div>
      <div>
        <img src={css} alt="css"/>
      </div>
      <div>
        <img src={html} alt="css"/>
      </div>
      <div>
        <img src={react} alt="react"/>
      </div>
      <div>
        <img src={mongo} alt="mongo"/>
      </div>
      <div>
        <img src={node} alt="node"/>
      </div>
      <div>
        <img src={aws} alt="aws"/>
      </div>
      <div>
        <img src={ubuntu} alt="ubuntu"/>
      </div>
      <div>
        <img src={sql} alt="sql"/>
      </div>
      <div>
        <img src={shopify} alt="shopify"/>
      </div>
      <div>
        <img src={python} alt="python"/>
      </div>
      <div>
        <img src={git} alt="git"/>
      </div>
      <div>
        <img src={java} alt="java"/>
      </div>
      <div>
        <img src={docker} alt="docker"/>
      </div>
      <div>
        <img src={tailwind} alt="docker"/>
      </div>
      <div>
        <img src={bootstrap} alt="docker"/>
      </div>
    </div>
  )
}

export default Frames