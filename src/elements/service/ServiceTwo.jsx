import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Consulting Services',
        description: 'Not sure what you need but know you need a tech guy. Keep end-to-end software development fast and economically sound.'
    },
    {
        icon: <FiLayers />,
        title: 'Software Development',
        description: 'We work with you to create mobile app solutions and responsive websites that enhance productivity and grow customer engagement.'
    },
    {
        icon: <FiUsers />,
        title: 'Team Augmentation',
        description: 'Our developers provide your project with extra skills and resources, so your existing software team gets the right support.'
    },
    {
        icon: <FiMonitor />,
        title: 'Shopify Solutions',
        description: 'Our marketing and software specialists work together to optimize your eCommerce platform, transforming more clicks into sales.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
