import React, {Component} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Intro from './../components/Intro';
import Project from './../components/Project';

export default class Projects extends Component {
    state = {
        introObj : { title: null },
        projectObj :  {firstParagrah: null }
    }
    
    componentDidMount () {
        console.log(this.props);
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
            <div>
                <Header />
                <Intro details={this.state.introObj} />
                <Project details={this.state.projectObj} />
                <h1>{this.state.projectObj.firstParagrah}</h1>
                <h1>{this.state.projectObj.secondParagrah}</h1>
                <h1>{this.state.projectObj.thirdParagrah}</h1>                
                <Footer />
            </div>
        )
    }
}