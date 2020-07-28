import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";



const PortfolioList = [
    {
        image: '/assets/images/our-work/scuffed.webp',
        category: 'Shopify',
        title: ' Scuffed.store',
        url:"/case-study/scuffed"
    },
    {
        image: '/assets/images/our-work/healthish.webp',
        category: 'Shopify',
        title: ' Healthish',
        url:"/case-study/healthish"
    },
    {
        image: '/assets/images/our-work/coolshirtz.webp',
        category: 'Shopify',
        title: ' Cool-Shirtz',
        url:"/case-study/cool-shirtz"
    },
    {
        image: '/assets/images/our-work/hey.webp',
        category: 'Development',
        title: ' Hey Influencers',
        url:"/case-study/hey"
    },
    {
        image: '/assets/images/our-work/drop-bottle.webp',
        category: 'Shopify',
        title: ' Drop Bottle',
        url:"/case-study/drop-bottle"
    },
    {
        image: '/assets/images/our-work/SMT.webp',
        category: 'Shopify',
        title: ' Skinny Me Tea',
        url:"/case-study/SMT"
    },
    {
        image: '/assets/images/our-work/wink.webp',
        category: 'Shopify',
        title: ' Winkalotz',
        url:"/case-study/winkalotz"
    }
    
]

class Portfolio extends Component{
    render(){
        let title = 'Our Projects',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <img src={value.image} className={`thumbnail`}></img>
                                        <img src={value.image} className={`bg-blr-image`}></img>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={value.url}>Case Study</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;