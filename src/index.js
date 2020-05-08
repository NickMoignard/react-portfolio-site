// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';

// Element Layout
import Service from "./elements/Service";
import About from "./elements/About";
import Contact from "./elements/Contact";
import Blog from "./elements/Blog";
import error404 from "./elements/error404";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkMainDemo}/>
                    


                    {/* Element Layot */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>

                    {/* List of Services? */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/> */}

                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    {/* Blog Posts */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/> */}


                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();