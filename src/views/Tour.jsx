import React from 'react';
// import store from "../store";
import '../assets/Tour/tour.css';
import axios from "axios";
import store from "../store";
import '../assets/style/css/font_1499266_s13zw29z4c.css';
import {changeTourList} from "../store/actionCreator/tour";
export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tourHeard:store.getState().tour.tourHeard,
            tourList:store.getState().tour.tourList,
        }
    }
    render(){
        return (
            <div className='tour'>
                <header className='tour_header' ref='this.state.tourHeard'>
                        <div className='header-one'>
                            <i className='iconfont ju-icon-arrow'></i>
                            <span>演出详情</span>
                            <i className='iconfont ju-icon-home'></i>
                        </div>
                        <div className='header-two'>
                            <div className='header-two-center'>
                                <div className='header-two-center-top'>
                                    <div className='header-two-center-top-img'>
                                    <img src={''+this.state.tourHeard.mobile_col_img} alt=""/>
                                    </div>
                                    <div className='header-two-center-top-text'>
                                        <h3>{this.state.tourHeard.name}</h3>
                                        <p>{this.state.tourHeard.city_num}个城市|{this.state.tourHeard.sch_num}场演出</p>
                                        <p>
                            {this.$filters.date(1601724600)}
                                            {/* {this.state.tourHeard.start_time}-{this.state.tourHeard.end_time} */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </header>
                <section className='tour_section'>
                    {
                       this.state.tourList.map(v=>(                     
                            <div className='section-body' key={v.id}>
                                <div className='section-body-time'>
                                    {/* {v.start_time}---{v.end_time} */}
                                    {this.$filters.date(v.end_time-v.start_time)}
                                    {/* {this.$filters.date(v.end_time)} */}
                                </div>
                                <div className='section-body-text'>
                                    <a href=';'>
                                        <h3>{this.state.tourHeard.name}</h3>
                                        <p>{v.city_name}|{v.venue_name}</p>
                                        <div className='section-body-text-price'>
                                            <span>{v.min_price}</span>
                                            <span>起</span>
                                        </div>
                                    </a>
                                </div>
                            </div>     
                       ))      
                    }  
                </section>
            </div>
        )
    }
    async componentDidMount() {
        // const {id}=this.props.location.state; 
        const {data}=await axios.get("/orange/show/tour/getInfo?id="+2);
        // console.log(data)
        const tourList = data.data;
        // console.log(tourList);
        store.dispatch(changeTourList({
            tourHeard:tourList,
            tourList:tourList.list
        }));
        this.setState({
            tourHeard: tourList,
            tourList:tourList.list
        })
        // console.log(this.state.tourList);

    }
}