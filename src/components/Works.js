import React, {Component} from 'react';

import Work from './../components/Work';
import shortid from 'shortid';
import { connect } from 'react-redux';

class Works extends Component {
    render() {
        const { works } = this.props;
        return(
            <section className="my-work" id="work">
                <h2 className="section__title">My works</h2>
                <p className="section__subtitle">Selection of my range of work</p>                
                <div className="portfolio">
                    {
                        works.map(workObj => <Work key={shortid.generate()} work={workObj} />)
                    }
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        works: state.works
    }
} 

export default connect(mapStateToProps)(Works);