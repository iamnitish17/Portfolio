import React from 'react';
import './Services.css';

import FullStack from "../../img/fullStack.png";
import Software from "../../img/software.png";
import UIUX from "../../img/uiux.png";

import { Card } from '../Card/Card';
import Resume from "../Services/Resume.pdf"

export const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
           <span>My Awesome</span>
           <span>services</span>
           <span>Building Digital Product with Better Experience</span>
           <a href={Resume} download>
            <button className='button s-button'>Download CV</button> 
           </a>
           {/* to blur the content around the button */}
           <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className='cards'>
           <div style={{left:"28rem"}}>
              <Card 
              emoji={FullStack}
              heading={"Frontend Development"}
              detail={"Html, CSS, Bootstrap, JavaScript, React"}
              />
            </div>
            <div style={{top:"10rem" , left:"8rem"}}>  
              <Card 
              emoji={Software}
              heading={"Software Development"}
              detail={"Java, SpringBoot, Data Structure & Algorithm"}
              />
            </div>
            <div style={{left:"24rem" , top:"18rem"}}>  
              <Card 
              emoji={UIUX}
              heading={"UI/UX"}
              detail={"Figma, Adobe XD, Photoshop"}
              />
           </div>
           <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}
