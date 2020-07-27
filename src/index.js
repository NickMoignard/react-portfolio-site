// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';

// Home layout
import Demo from './page-demo/Demo';
import MainDemo from './home/MainDemo';
import Startup from './home/Startup';
import Paralax from './home/Paralax';
import HomePortfolio from './home/HomePortfolio';
import DigitalAgency from './home/DigitalAgency';
import CreativeAgency from './home/CreativeAgency';
import PersonalPortfolio from './home/PersonalPortfolio';
import Business from './home/Business';
import StudioAgency from './home/StudioAgency';
import PortfolioLanding from './home/PortfolioLanding';
import CreativeLanding from './home/CreativeLanding';
import HomeParticles from './home/HomeParticles';
import CreativePortfolio from './home/CreativePortfolio';
import DesignerPortfolio from './home/DesignerPortfolio';
import InteriorLanding from './home/Interior';
import CorporateBusiness from './home/CorporateBusiness';


import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import Service from "./elements/Service";
import Shopify from './elements/Shopify';
import SoftDev from "./elements/SoftDev";
import WebDev from "./elements/WebDev";
import Consulting from "./elements/Consulting";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

//Shopify
import ShopifyDebug from './elements/shopify/ShopifyDebug';
import SpeedAudit from './elements/shopify/SpeedAudit';
import SeoBoost from './elements/shopify/SeoBoost';
import ThemeCustomise from './elements/shopify/ThemeCustomise';
import ShopifyAppDev from './elements/shopify/ShopifyAppDev';

//Web Dev
import WebDebug from './elements/web/WebDebug';
import CompleteWebsite from './elements/web/CompleteWebsite';
import NewFeatures from './elements/web/NewFeatures';

//Consulting
import ItConsulting from './elements/consulting/ItConsulting';
import Copywriting from './elements/consulting/Copywriting';
import DataAnalysis from './elements/consulting/DataAnalysis';
import ServerAdmin from './elements/consulting/ServerAdmin';

// Case Study
import Scuffed from './elements/case/Scuffed';
import Healthish from './elements/case/Healthish';
import CoolShirtz from './elements/case/CoolShirtz';
import Hey from './elements/case/Hey';
import Drop from './elements/case/Drop';
import SMT from './elements/case/SMT';
import Winkalotz from './elements/case/Winkalotz';

//Mobile Dev
import MobileDev from './elements/mobile/MobileDev';

// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkMainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} component={DarkMainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} component={DarkPortfolioLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/designer-portfolio`} component={DesignerPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} component={CreativePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/interior-landing`} component={InteriorLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} component={CorporateBusiness}/>

                    {/* Shopify Layout */}
                    <Route exact path={`${process.env.PUBLIC_URL}/shopify-debug`} component={ShopifyDebug}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/speed-audit`} component={SpeedAudit}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/seo-boost`} component={SeoBoost}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/theme-customise`} component={ThemeCustomise}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/shopify-app-dev`} component={ShopifyAppDev}/>
                    
                    {/* Web Dev Layout */}
                    <Route exact path={`${process.env.PUBLIC_URL}/web-debug`} component={WebDebug}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/complete-website`} component={CompleteWebsite}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/new-features`} component={NewFeatures}/>

                    {/* Consulting Layout */}
                    <Route exact path={`${process.env.PUBLIC_URL}/it-consulting`} component={ItConsulting}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/copywriting`} component={Copywriting}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/data-analysis`} component={DataAnalysis}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/server-admin`} component={ServerAdmin}/>


                    {/* Mobile Dev Layout */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/mobile-dev`} component={MobileDev}/> */}

                    {/* Case Studies */}
                    <Route exact path={`${process.env.PUBLIC_URL}/case-study/scuffed`} component={Scuffed}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/case-study/healthish`} component={Healthish}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/case-study/cool-shirtz`} component={CoolShirtz}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/case-study/hey`} component={Hey}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/case-study/drop-bottle`} component={Drop}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/case-study/SMT`} component={SMT}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/case-study/winkalotz`} component={Winkalotz}/>

                    {/* Element Layot */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/shopify`} component={Shopify}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/web-dev`} component={WebDev}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/consulting`} component={Consulting}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/software-dev`} component={SoftDev}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>


                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/>


                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();