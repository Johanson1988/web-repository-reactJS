import React, {Component} from 'react';

import Header from './../components/Header';
import Intro from './../components/Intro';
import Services from './../components/Services';
import About from './../components/About';
import Works from './../components/Works';
import Footer from './../components/Footer';

const introDetails = {
    title:'Johann Moreno',
    subtitle:'fullstack dev',
    imgSrc: "./images/profile.jpg",
    imgAlt: "My profile picture"
}

export default class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Intro details={introDetails} />
                <Services />
                <About />
                <Works />
                <Footer />
            </div>
        )
    }
}