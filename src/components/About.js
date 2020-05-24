import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return(
            <section className="about-me" id="about">
                <h2 className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">Full Stack Web Developer based out of Barcelona</p>               
                <div className="about-me__body">
                    <p>I have been always related to technology in all my jobs. From the guy who fix computer problems at the office, to IT support specialist. My first professional contact to coding was writing Excel Macros in VBA to automate office’s tasks. Then, I started an online degree in <a href="https://www.uopeople.edu/programs/cs/" target="_blank" rel="noopener noreferrer">Computer Science at the University of the People.</a></p>
                    
                    <p>After passing all courses, I decided to move to Barcelona. Then I took the <a href="https://www.ironhack.com/en/web-development" target="_blank" rel="noopener noreferrer">Ironhack Web development Bootcamp</a> to kick off my career as a Junior web-dev. The project I am working on at the moment is about to conclude, and I am seeking for new opportunities as a Junior front-end or back-end web developer.</p>
                </div>                
                <img src="images/mern-stack.png" alt="MERN STACK" className="about-me__img" />
            </section>
        )
    }
}