import React from 'react'
import "./Intro.css"
import Github from "../../../src/img/github.png";
import LinkedIn from "../../../src/img/linkedin.png";
import Instagram from "../../../src/img/instagram.png";

import Vector1 from "../../../src/img/Vector1.png";
import Vector2 from "../../../src/img/Vector2.png";
import boy from "../../../src/img/boy.png";
import thumbup from "../../../src/img/thumbup.png";
import Crown from "../../../src/img/crown.png";
import glassesimoji from "../../../src/img/glassesimoji.png";

import { FloatingDiv } from '../FloatingDiv/FloatingDiv';


export const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hy! I Am</span>
                <span>Nitish Raj</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className='i-icons'>
            <a href='https://github.com/iamnitish17' target="blank">
                <img src={Github} alt="github account" />
            </a>
            <a href='https://www.linkedin.com/in/nitish-raj-1707/' target="blank">
                <img src={LinkedIn} alt="linkedIn account" />
            </a>
            <a href='https://www.instagram.com/nittish.17/'  target="blank">
                <img src={Instagram} alt="insta account" />
            </a>    
            </div>
        </div>
        <div className='i-right'>
            <img src={Vector1} alt='blue-color' />
            <img src={Vector2} alt='yellow-color' />
            <img src={boy} alt='boy-img' />
            <img src={glassesimoji} alt="funny-imoji" />
            <div style={{top:'-4%', left:'58%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'67%', left:'3%'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>
            {/* blur divs */}
            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>

            <div className='blur' style={{background:'#C1F5FF',
              top:'17rem',
              width:'21rem',
              height:'11rem',
              left:'-9rem'
              }}></div>
              
        </div>
    </div>
  )
}
