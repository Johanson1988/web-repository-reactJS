import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import SocialNetwork from './../components/SocialNetwork';
import shortid from 'shortid';

class Intro extends Component {
    render() {
        
        const {title,subtitle, imgSrc, imgAlt} = this.props.introDetails;
        const technologies = this.props.technologies;
        return(
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    <strong>{title}</strong>
                </h1>               
                    {
                        Array.isArray(subtitle) ?
                        <div>
                            <p className="section__subtitle section__subtitle--intro">Technologies involved:</p>
                            <ul className="tech-list__intro">
                                {technologies.map(techIcon => <SocialNetwork key={shortid.generate()} socialNetwork={techIcon} />)}
                            </ul>
                        </div>
                        :  <p className="section__subtitle section__subtitle--intro">{subtitle}</p>
                    }
                
                <img src={(imgSrc)} alt={imgAlt} className="intro__img" />
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const handle = ownProps.match.params.handle;
    if (handle) {
        const project = state.works.find(work => work.projectName === handle);
        return {
            introDetails : 
            {
                title: project.projectName,
                subtitle: project.technologies,
                imgSrc: project.projectLogo,
                imgAlt: 'logo ' + project.projectName
            },            
                technologies: state.technologies.filter(tech => project.technologies.includes(tech.title))
        }
    }
    else {
        return {
            introDetails: state.introDetails
        }
    }
}
export default compose(withRouter, connect (mapStateToProps)) (Intro);