import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl = <img style={{width:"120px", transform: "scale(2)" }} src="/assets/images/logo/MDS_A.png" alt="M.D.S." />;
        
        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="/">Home</Link></li>
                                <li className="has-droupdown"><Link to="/service" >Service</Link>
                                    <ul className="submenu">
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/Shopify">Shopify</Link></li>
                                        <li><Link to="/react-js">React JS</Link></li>
                                        <li><Link to="/ruby">Ruby</Link></li>
                                        <li><Link to="/javascript">Javascript</Link></li>
                                        <li><Link to="/php">PHP</Link></li>
                                        <li><Link to="/dev-ops">Development Operations</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about" >About</Link></li>

                                <li className="has-droupdown"><Link to="#pages" >Pages</Link>
                                    <ul className="submenu">
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/404">404</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="#" >Blocks</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/video-popup">Video Popup</Link></li>
                                        <li><Link to="/progressbar">Progressbar</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/counters">Counters</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/clint-logo">Clint Logo</Link></li>
                                        <li><Link to="/contact-form">Contact Form</Link></li>
                                        <li><Link to="/google-map">Google Map</Link></li>
                                        <li><Link to="/columns">Columns</Link></li>
                                        <li><Link to="/pricing-table">Pricing Table</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="header-btn">
                            <a className="rn-btn" href="https://discord.gg/uP3UzxZ">

                                <span>chat now</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;