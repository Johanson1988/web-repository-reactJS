import React, {Component} from 'react';

import Work from './../components/Work';
import shortid from 'shortid';

const worksArray = [{link: '#', imgSrc: 'images/portfolio-01.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-02.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-03.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-04.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-05.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-06.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-07.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-08.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-09.jpg'},
                    {link: '#', imgSrc: 'images/portfolio-10.jpg'}];

export default class Works extends Component {
    render() {
        return(
            <section className="my-work" id="work">
                <h2 className="section__title">My works</h2>
                <p className="section__subtitle">Selection of my range of work</p>                
                <div className="portfolio">
                    {
                        worksArray.map(workObj => <Work key={shortid.generate()} work={workObj} />)
                    }
                </div>
            </section>
        )
    }
}