import React, {useState} from 'react';
import logo from "../assets/images/svg/logo_wh.svg";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Hero = () => {
    const [count, setCount] = useState(0);
    return (
    <div className="hero">
        <div className="hero-wrapper">
            <img src={logo} alt="Wischn logo"/>
            <p className="p">Manufaktur nachhaltiger Digitalisierung</p>
       </div>
       <button onClick={() => scrollTo("#main")}>&#9660;</button>
    </div>
    )
}

export default Hero