import React, {Component} from 'react';

export default class Intro extends Component {
    render() {
        return(
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    <strong>Johann Moreno</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">front-end dev</p>
                <img src="./images/profile.jpg" alt="My profile picture" className="intro__img" />
            </section>
        )
    }
}