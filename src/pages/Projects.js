import React, {Component} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Intro from './../components/Intro';

export default class Projects extends Component {
    state = {
        introObj : {title:null},
        projectObj : {firstParagrah:null}
    }
    
    componentDidMount () {
        const {handle} = this.props.match.params;
        const introObj = {
            title: handle,
            subtitle: handle,
            imgSrc: `./../images/${handle.replace("project", "portfolio")}.jpg`,
            imgAlt: handle
        }
        const projectObj = {
            firstParagrah: handle,
            secondParagrah: handle,
            thirdParagrah: handle,
            imgSrc: `./../images/${handle.replace("project", "portfolio")}.jpg`,
            imgAlt: handle
        }
        this.setState( _ => ({introObj,projectObj}));
    }

    render() {
        return(
                //<Projects details={this.state.projectObj} />
            <div>
                <Header />
                <Intro details={this.state.introObj} />          
                <Footer />
            </div>
        )
    }
}