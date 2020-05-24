import React, {Component} from 'react';

export default class Service extends Component {
    render() {
        const { title, paragraph } = this.props.service;
        const { qualifications } = this.props.service;
        return(
        <div className="service">
            <h3>{title}</h3>
            <p>
                {title !== 'Academic Qualifications' ? paragraph :
                    <ul class="academic" >
                        {qualifications.map(qualification => <li>
                            <p>{qualification.title}</p>
                            <a href={qualification.link} target="_blank" rel="noopener noreferrer">
                                <img class="academic-logo" src={qualification.imgPath} alt={qualification.altDesc}/>
                            </a>
                        </li>)}
                    </ul>                
                }
            </p>
        </div>
        )
    }
}