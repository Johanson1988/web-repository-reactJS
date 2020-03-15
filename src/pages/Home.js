import React, {Component} from 'react';
//import {Link} from 'react-router-dom';

import Intro from './../components/Intro';
import Services from './../components/Services';
import About from './../components/About';
import Works from './../components/Works';
import Footer from './../components/Footer';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Intro />
                <Services />
                <About />
                <Works />
                <Footer />
            </div>
        )
    }
}