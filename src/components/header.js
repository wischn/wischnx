import React from "react";
import {Link} from "gatsby";
import logo from "../assets/images/svg/logo_gr.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header id="header" className="sticky">
      <div className="logo">
       <Link to="/#header"><img src={logo} alt="Wischn Logo"/></Link>
      </div>
      
      <nav className="nav">
      <div className="menu-mobile">
          <input type="checkbox" className="toggler"/>
          <div className="hamburger"><div></div>
          </div>
         <div className="menu">
           <div>
           <div>
              <ul>
                <li><Link to="/#header" activeClassName="activeli">About</Link></li>
                <li><Link to="/#header" activeClassName="activeli">Portfolio</Link></li>
                <li><Link to="/contact/" activeClassName="activeli">Contact</Link></li>
                {/* <li><Link to="/blog/" activeClassName="activeli">Blog</Link></li> */}
              </ul>
           </div>
           </div>
        </div>
              
     </div>
  </nav>


    </header>
  )
}

export default Header