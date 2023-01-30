import React from 'react'
import "./Work.css";

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

export const Work = () => {
  return (
    <div className='work'>
         {/* left side */}
       <div className='w-left'>
        <div className='awesome'>
           <span>Works for All these</span>
           <span>Brands & Clients</span>
           <span>Connecting with all these Companies is quite an Experience</span>
           <span>Let's make something amazing together</span>
            <button className='button s-button'>Hire Me</button> 
           {/* to blur the content around the button */}
           <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
       </div>

        {/* right side */}
        <div className='w-right'>
         <div className='w-mainCircle'>
           <div className='w-secCircle'>
              <img src={Upwork} alt="" />
           </div>
           <div className='w-secCircle'>
              <img src={Fiverr} alt="" />
           </div>
           <div className='w-secCircle'>
              <img src={Amazon} alt="" />
           </div>
           <div className='w-secCircle'>
              <img src={Shopify} alt="" />
           </div>
           <div className='w-secCircle'>
              <img src={Facebook} alt="" />
           </div>
         </div>
         <div className='w-backCircle blurCircle'></div>
         <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}
