import React from 'react'
import {  Link } from 'gatsby'

const Portfolio = () => {
  return (
    <div className="sec">
     <div className="portfolio">
        <div className="containerp" style={{backgroundColor:'$dark-color'}}>
         <Link to="#" activeClassName="activeli">WORKSHOPS</Link>
        </div>
        <div className="containerp" style={{backgroundColor:'$mid-color'}}>
         <Link to="#" activeClassName="activeli">BERATUNG</Link>
        </div>
        <div className="containerp" style={{backgroundColor:'$dark-color'}}>
         <Link to="#" activeClassName="activeli">DESIGN</Link>
        </div>
        <div className="containerp" style={{backgroundColor:'$mid-color'}}>
         <Link to="#" activeClassName="activeli">FIVERR</Link>
        </div>
     </div>
   </div>
  )
}


export default Portfolio

