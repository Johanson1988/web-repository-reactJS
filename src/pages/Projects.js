import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
            <div>
                <h1>PROJECTS</h1>
                <h2>portfolio</h2>
                <Link to="/Home">Home</Link>
            </div>
        )
    }
}