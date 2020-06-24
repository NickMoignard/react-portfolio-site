import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'About',
        description = 'We’re a Melbourne-based digital product studio providing expert advice and software solutions. We can help adapt your existing processes or start from scratch on your latest project, with a versatile approach and focus on the bottom line that leaves more money in your pocket.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div style={{marginTop:"initial"}} className="thumbnail">
                                    <img className="w-100"  src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_960_720.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Our Team</h3>
                                                <p>We work with a network of talented / expert / brilliant freelancers, allowing us to bring a diverse skill set and over X years of combined experience to every project.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Our Clients</h3>
                                                <p>We build lasting friendships with each and every one of our clients so that we can deliver the solutions they need on time, all the time.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;