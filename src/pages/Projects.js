import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Intro from './../components/Intro';

export default class Projects extends Component {
    render() {
        return(
            <div>
                <Header />
                <Intro details="" />
                <Link to="/">Home</Link>
                <Footer />
            </div>
        )
    }
}