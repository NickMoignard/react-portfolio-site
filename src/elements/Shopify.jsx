import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import axios from 'axios'




class Shopify extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false,
          debug: '75',
          audit: '50',
          seo: '1500',
          theme: '50',
          basic: '750',
          medium: '5000',
          advanced: '20000',
          currency: 'AUD',
          euroToAud: '',
          audToCountryOfUser: '' 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }

    componentDidMount() {
        axios.get(`https://ipapi.co/currency/`)
        .then((resp) => {
            this.setState({
                currency: resp.data
            })
            return axios.get(`http://data.fixer.io/api/latest?access_key=38c34d79cfd8c8bd9f8d8fce23c678c9&symbols=${this.state.currency},AUD`);
        })
        .then((userCurr) => {
            console.log(userCurr)
            const euro = userCurr['data']["rates"]['AUD']
            const otherCurr = userCurr['data']["rates"][this.state.currency]
            this.setState({
                euroToAud: userCurr['data']["rates"]['AUD'],
                audToCountryOfUser: userCurr['data']["rates"][this.state.currency],
                debug: Math.round(('75'/euro)*otherCurr),
                audit: Math.round(('50'/euro)*otherCurr),
                seo: Math.round(('1500'/euro)*otherCurr),
                theme: Math.round(('50'/euro)*otherCurr),
                basic: Math.round(('750'/euro)*otherCurr),
                medium: Math.round(('5000'/euro)*otherCurr),
                advanced: Math.round(('20000'/euro)*otherCurr)
            })
        })
        .catch((err) => {
            console.log(err)
        })

    }
    render(){
        
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190"  style={{backgroundColor: "#101010"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">WEBSITE DEVELOPMENT</h2>
                                    <p>Fresh From The Press Discription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="https://thumbs.dreamstime.com/z/shopify-company-logo-samsung-mobile-commerce-platform-allows-anyone-to-easily-sell-online-retail-location-99402611.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    {/* <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                    <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p> */}
                                                    <h4 className="title">Shopify price details</h4>
                                                    
                                                    <ul className="liststyle list-links">
                                                        <li><a href="/shopify-debug">Debugging</a>: ${this.state.debug} {this.state.currency} per hour</li>
                                                        <li><a href="/speed-audit">Site Speed Audit</a>: ${this.state.audit} {this.state.currency} (includes a report with actionable tasks)</li>
                                                        <li><a href="/seo-boost">SEO Boost</a>: ${this.state.seo} {this.state.currency} (50+ mobile 90+ desktop google site speed score)
                                                            <ul className="liststyle">
                                                                <li>Blocking Js removed and made asynchronous</li>
                                                                <li>Image Optimisation</li>
                                                                <li>Cache Policy</li>
                                                                <li>CDN updated</li>
                                                                <li>Theme Refactor</li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/theme-customise">Theme Customisation</a>: ${this.state.theme} {this.state.currency} per hour</li>
                                                        <li><a href="/shopify-app-dev">Shopify Application Development</a>:
                                                        <ul className="liststyle">
                                                            <li>Basic ${this.state.basic} {this.state.currency}</li>
                                                            <li>Medium ${this.state.medium} {this.state.currency}</li>
                                                            <li>Advanced ${this.state.advanced} {this.state.currency}+</li>
                                                        </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                    <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
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
export default Shopify;