import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Full-Service Development',
        description: 'We care about the success of your project no matter its size, and we’ll work with you to craft software that scales with your business.'
    },
    {
        icon: '02',
        title: 'Modifying Existing Systems',
        description: 'We’re not here to take $2 million and build some new widget you didn’t ask for. Our developers are ready to jump in, become part of your team, and start improving your profits.'
    },
    {
        icon: '03',
        title: 'Advice and Solutions',
        description: 'We deliver technology that caters to your unique needs. If we can’t find the right solution for your business, we’ll help you find someone who can.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img style={{height: "100px", width: "100px"}} src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;