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
                                <li className="has-droupdown"><Link to="/shopify" >Shopify</Link>
                                    <ul className="submenu">
                                        <li><Link to="/shopify-debug">Debugging</Link></li>
                                        <li><Link to="/speed-audit">Site Speed Audit</Link></li>
                                        <li><Link to="/seo-boost">SEO Boost</Link></li>
                                        <li><Link to="/theme-customise">Theme Customisation</Link></li>
                                        <li><Link to="/shopify-app-dev">Shopify App Development</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/web-dev" >Web Development</Link>
                                    <ul className="submenu">
                                        <li><Link to="/web-debug">Debugging</Link></li>
                                        <li><Link to="/complete-website">Complete Website</Link></li>
                                        <li><Link to="/new-features">New Features</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/consulting" >Consulting</Link>
                                    <ul className="submenu">
                                        <li><Link to="/it-consulting">IT Consultation</Link></li>
                                        <li><Link to="/copywriting">Copywriting</Link></li>
                                        <li><Link to="/data-analysis">Data Analysis</Link></li>
                                        <li><Link to="/server-admin">Server Administration</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/software-dev" >Software Development</Link>
                                    <ul className="submenu">
                                        <li><Link to="/consulting">Consulting Services</Link></li>
                                        <li><Link to="/software-dev">Software Development</Link></li>
                                        <li><Link to="/professional-services">Professional Services</Link></li>
                                        <li><Link to="/shopify">Shopify</Link></li>
                                        <li><Link to="/web-dev">Website Development</Link></li>
                                        <li><Link to="/software-security">Software Security</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about" >About</Link></li>
                                <li className="has-droupdown"><Link to="/blog" >Blog</Link></li>
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