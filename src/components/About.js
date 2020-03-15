import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return(
            <section className="about-me" id="about">
                <h2 className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>               
                <div className="about-me__body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>                
                <img src="images/dev-jane-02.jpg" alt="Jane leaning against a bus" className="about-me__img" />
            </section>
        )
    }
}