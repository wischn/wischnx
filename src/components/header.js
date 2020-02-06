import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql, Link} from "gatsby";
import logo from "../assets/images/svg/logo_gr.svg";

const Header = () => {
  return (
    <header id="header" className="sticky">
      <div className="logo">
       <Link to="/#header"><img src={logo} alt="Wischn Logo"/></Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/about/" activeClassName="activeli">About</Link></li>
          <li><Link to="/portfolio/" activeClassName="activeli">Portfolio</Link></li>
          <li><Link to="/contact/" activeClassName="activeli">Contact</Link></li>
          <li><Link to="/blog/" activeClassName="activeli">Blog</Link></li>
        </ul>
      </nav>


    </header>
  )
}

export default Header