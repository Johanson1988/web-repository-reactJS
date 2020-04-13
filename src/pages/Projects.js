import React, {Component} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Intro from './../components/Intro';
import Project from './../components/Project';
import { connect } from 'react-redux';

class Projects extends Component {

    render() {
        const project = this.props.work;
        const introObj = 
        {
            title: project.projectName,
            subtitle: project.technologies,
            imgSrc: project.projectLogo,
            imgAlt: 'logo ' + project.projectName
        }
        return(
            <div>
                <Header />
                <Intro details={introObj} />
                <Project details={project} />            
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