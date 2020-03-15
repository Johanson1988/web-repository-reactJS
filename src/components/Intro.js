import React, {Component} from 'react';

export default class Intro extends Component {
    render() {
        const {title,subtitle, imgSrc, imgAlt} = this.props.details;
        return(
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    <strong>{title}</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">{subtitle}</p>
                <img src={imgSrc} alt={imgAlt} className="intro__img" />
            </section>
        )
    }
}