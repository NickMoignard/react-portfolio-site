import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import TechLogos from "../elements/TechLogos";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class About extends Component{
    render(){
        let title = 'About',
        description = 'We’re a Melbourne-based digital product studio providing expert advice and software solutions. We can help adapt your existing processes or start from scratch on your latest project, with a versatile approach and focus on the bottom line that leaves more money in your pocket.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                {/* End Breadcrump Area */}

                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Company</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start About Area  */}
                <div className="rn-about-area pb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="https://cdn.pixabay.com/photo/2020/05/12/09/22/australia-5162014_960_720.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Our Clients</h3>
                                                    <p>We build lasting friendships with each and every one of our clients so that we can deliver the solutions they need on time, all the time. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}              

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your Work Now</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                <a className="rn-btn btn-white" href="/about">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img style={{width: "1287px", height:"703px"}} src="/assets/images/about/melbourne-2986345.jpg" alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">Our Team</h2>
                                    <p>We work with a network of talented/expert/brilliant freelancers, allowing us to bring a diverse skill set and over X years of combined experience to every project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="https://avatars0.githubusercontent.com/u/13538178?s=460&v=4" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Nick Moignard</h4>
                                        <p className="designation">Managing Director and Lead Developer</p>
                                    </div>
                                    {/* <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-02.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Sarah</h4>
                                        <p className="designation">Marketing and Communications Officer</p>
                                    </div>
                                    {/* <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="https://pbs.twimg.com/profile_images/1086132039005351936/euDYD1V4_400x400.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">James</h4>
                                        <p className="designation">Jnr. Developer</p>
                                    </div>
                                    {/* <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}


                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Islam</h4>
                                        <p className="designation">Mid. Developer</p>
                                    </div>
                                    {/* <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                             {/* Start Single Team  */}
                             <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Peng</h4>
                                        <p className="designation">Snr. Developer</p>
                                    </div>
                                    {/* <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                             {/* Start Single Team  */}
                             <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Yukai</h4>
                                        <p className="designation">Snr. Developer</p>
                                    </div>
                                    {/* <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <TechLogos />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About