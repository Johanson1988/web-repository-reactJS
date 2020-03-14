import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Intro from './../components/Intro';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Intro />
                <Link to="/Projects">Projects</Link>
            </div>
        )
    }
}