import React, {Component} from 'react';

import Service from './../components/Service';

const serviceObj1 = {title: 'Design + Development', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'};

const serviceObj2 = {title: 'E-Commerce', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'};

const serviceObj3 = {title: 'WordPress', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'};

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

                <a href="#work" className="btn">My Work</a>
            </section>
        )
    }
}