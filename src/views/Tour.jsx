import React from 'react';
import store from "../store";
import '../assets/Tour/tour.css';
export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailList:store.getState().theater.detailList
        }
    }
    render(){
        return (
            <div className='tour'>
                <header>
                        <div className='header-one'>
                            <i></i>
                            <span>演出详情</span>
                            <i></i>
                        </div>
                        <div className='header-two'>
                            <div className='header-two-center'>
                                <div className='header-two-center-top'>
                                    <div className='header-two-center-top-img'>
                                    {/* <img></img> */}
                                    </div>
                                    <div className='header-two-center-top-text'>
                                        <h3>聚成制作|法语</h3>
                                        <p>6个城市|33场演出</p>
                                        <p>2020.08.13-10.03</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </header>
                <section>
                    <div className='section-body'>
                        <div className='section-body-time'>
                           10月02-03 
                        </div>
                        <div className='section-body-text'>
                            <a href=';'>
                                <h3>聚成制作</h3>
                                <p>杭州</p>
                                <div className='section-body-text-price'>
                                    <span>￥280</span>
                                    <span>起</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}