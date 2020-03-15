import React, {Component} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Intro from './../components/Intro';

export default class Projects extends Component {
    state = {
        introObj : {
            title: '',
            subtitle: '',
            imgSrc: ''.replace("project", "portfolio"),
            imgAlt: ''
        },
        projectObj : {
            firstParagrah: '',
            SecondParagrah: '',
            thirdParagrah: '',
            imgSrc: ''.replace("project", "portfolio"),
            imgAlt: ''
        }
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
        return(
            <div>
                <Header />
                <Intro details={this.state.introObj} />
                <Projects details={this.state.projectObj} />
                <Footer />
            </div>
        )
    }
}