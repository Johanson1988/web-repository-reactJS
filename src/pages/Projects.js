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
            imgSrc: handle.replace("project", "portfolio"),
            imgAlt: handle
        }
        const projectObj = {
            firstParagrah: handle,
            secondParagrah: handle,
            thirdParagrah: handle,
            imgSrc: handle.replace("project", "portfolio"),
            imgAlt: handle
        }
        this.setState( _ => ({introObj,projectObj}));
    }

    render() {
        //                <Intro details={this.state.introObj} />
        //                <Projects details={this.state.projectObj} />
        return(
            <div>
                <Header />
                <h1>{this.state.introObj.title}</h1>
                <h1>{this.state.projectObj.firstParagrah}</h1>
                <Footer />
            </div>
        )
    }
}