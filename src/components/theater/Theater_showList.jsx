import React, {Component} from 'react';
import '../../assets/Theater/Theater.css';
export default class Theater_showList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
           
                  
                            <div  className="maincenter-one">
                                <div className='maincenter-one-time'>
                                    <p>{this.props.show_time}</p>
                                    <span></span>
                                </div>
                                <a href=';'>
                                <img src={''+this.props.pic} alt=""/>
                                </a>
                            </div>   
     
        )
    }
}