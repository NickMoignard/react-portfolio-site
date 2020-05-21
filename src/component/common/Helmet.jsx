import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || M.D.S</title>
                    <meta name="description" content="Moignard Digital Solutions - Bespoke Software Development" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
