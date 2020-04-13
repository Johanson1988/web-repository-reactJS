import React, {Component} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Intro from './../components/Intro';
import Project from './../components/Project';
import { connect } from 'react-redux';

class Projects extends Component {
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
        console.log('Projects:', this.props);
        return(
            <div>
                <Header />
                <Intro details={this.state.introObj} />
                <Project details={this.state.projectObj} />            
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const handle = ownProps.match.params.handle;
    return {
        work: state.works.find(work => work.projectName === handle)
    }
}
export default connect(mapStateToProps)(Projects);