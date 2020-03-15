import React, {Component} from 'react';

export default class Intro extends Component {
    state = {
        title: this.props.details.title,
        subtitle: this.props.details.subtitle,
        imgSrc: this.props.details.imgSrc,
        imgAlt: this.props.details.imgAlt
    }
    render() {
        return(
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    <strong>{this.state.title}</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">{this.state.subtitle}</p>
                <img src={this.props.details.imgSrc} alt={this.props.details.imgAlt} className="intro__img" />
            </section>
        )
    }
}