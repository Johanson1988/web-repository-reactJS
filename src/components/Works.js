import React, {Component} from 'react';

import Work from './../components/Work';
import shortid from 'shortid';

const worksArray = [{projectName: 'project-01', imgSrc: 'images/portfolio-01.jpg'},
                    {projectName: 'project-02', imgSrc: 'images/portfolio-02.jpg'},
                    {projectName: 'project-03', imgSrc: 'images/portfolio-03.jpg'},
                    {projectName: 'project-04', imgSrc: 'images/portfolio-04.jpg'},
                    {projectName: 'project-05', imgSrc: 'images/portfolio-05.jpg'},
                    {projectName: 'project-06', imgSrc: 'images/portfolio-06.jpg'},
                    {projectName: 'project-07', imgSrc: 'images/portfolio-07.jpg'},
                    {projectName: 'project-08', imgSrc: 'images/portfolio-08.jpg'},
                    {projectName: 'project-09', imgSrc: 'images/portfolio-09.jpg'},
                    {projectName: 'project-10', imgSrc: 'images/portfolio-10.jpg'}];

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