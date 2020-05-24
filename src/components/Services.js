import React, {Component} from 'react';

import Service from './../components/Service';

const serviceObj1 = {title: 'Current ocupation', paragraph: 'Design an automation system for device testing in Barcelona’s Orange’s networks laboratory. We write scripts in TCL, using the iTest(Spirent Communications) IDE, to communicate with the devices involved via SSH, Telnet or WinRS and perform the test actions. Then, a software called Velocity (Spirent Communications) is responsible for executions, collect results and present the data to the final user.'};

const serviceObj2 = {title: 'Academic Qualifications', qualifications: [
    {title: 'Web Development Bootcamp', link:'https://www.ironhack.com/en/web-development', imgPath:'images/ironhack-logo.svg',    altDesc:'Ironhack'},
    {title:'AS Degree in Computer Science', link:'https://www.uopeople.edu/programs/cs/', imgPath:'images/logo_uopeople.png', altDesc: 'University of the People'}
]} ;

const serviceObj3 = {title: 'Personal projects', paragraph: 'Below, you can see detailed information about my personal projects using the MERN (Mongo + Express + React + Node) stack. After I have consolidated some of these projects as solid WebApps, my aim is to learn mobile development and create the mobile native version of each using React-Native or Flutter.'};

export default class Services extends Component {
    render() {
        return(
            <section className="my-services" id="services">
                <h2 className="section__title section__title--services">What I do</h2>
                <div className="services">
                    <Service service ={serviceObj1} />
                    <Service service ={serviceObj2} />
                    <Service service ={serviceObj3} />
                </div>

                <a href="#work" className="btn">My Projects</a>
            </section>
        )
    }
}