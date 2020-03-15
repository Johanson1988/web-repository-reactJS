import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './../components/Header';
import Footer from './../components/Footer';

export default class Projects extends Component {
    render() {
        return(
            <div>
                <Header />
                <h2>portfolio</h2>
                <Link to="/">Home</Link>
                <Footer />
            </div>
        )
    }
}