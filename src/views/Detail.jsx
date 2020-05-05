import React from "react";
import '../assets/Theater/Theater_detail.css';
import axios from "axios";
import store from "../store";
import '../assets/style/css/font_1499266_s13zw29z4c.css';
// import {changeDealiList} from "../store/actionCreator/theater";
import {changeTheatreid} from "../store/actionCreator/theater";
export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theatre:store.getState().theater.theatre,
            venue:store.getState().theater.venue
        }
    }

    render(){
        return (
            <div  className='detail'>
                <div  className='body'>
                    <header className='detail_header' ref='this.state.theatre'>
                        <div className='top'>
                        <div className='header-one'>
                            <i className='iconfont ju-icon-arrow'></i>
                        </div>
                        <div className='header-two'>
                            <div className='header-two-center'>
                            <div className='header-two-center-top'>
                                <div className='header-two-center-top-img'>
                                <img src={''+this.state.theatre.theatre_pic} alt=""/>
                                </div>
                                <div className='header-two-center-top-text'>
                                    <p>{this.state.theatre.theatre_name}</p>
        <p>{this.state.theatre.sch_num}场演出</p>
                                </div>
                            </div>
                            <div className='header-two-center-position'>
        <span>{this.state.theatre.city_name}&nbsp;|&nbsp;{this.state.theatre.theatre_address}</span>
                                <i></i>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className='header-three'>
                            热门演出
                        </div>
                    </header> 
                    <section className='detail_section'>
                        {
                            this.state.venue.map(v=>(
                            <div className='section-body' key={v.schedular_id}>
                                <div className='section-body-one'>
                                    <div className='section-body-one-img'>
                                    <img src={''+v.pic} alt=""/>
                                    </div>
                                    <div className='section-body-one-text'>
                                        <div className='section-body-one-text-top'>
                                            <span>{v.start_show_time}</span>
                                        </div>
                                        <div className='section-body-one-text-center'>
                                            <span>{v.name}</span>
                                        </div>
                                        <div className='section-body-one-text-place'>
                                            {v.city_name} |{v.venue_name}
                                        </div>
                                    </div>
                                </div>
                                <div className='section-body-two'>
                                    {
                                        v.support_desc.map((v)=>(
                                            <span key={v.id}>{v}</span>
                                    ))
                                    }
                                </div>
                                <div className='section-body-three'>
                                    <span>{v.min_price}</span>
                                    <span>起</span>
                                </div>
                        </div>
                            ))
                        }
                    </section>    
                </div>
                <div className="normal">没有更多了</div>
            </div>
        )
    }
    async componentDidMount() {
        const {theatre_id,venue_id}=this.props.location.state;
        // https://api.juooo.com/theatre/index/getTheatreInfo?theatre_id=2&longitude=&latitude=&version=6.1.1&referer=2
        const {data}=await axios.get("/orange/theatre/index/getTheatreInfo?theatre_id="+theatre_id);
        const theatre= data.data;
        // console.log(theatre);
        // https://api.juooo.com/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&version=6.1.1&referer=2
        const abc=await axios.get("/orange/Show/Search/getShowList?venue_id="+venue_id);
        const data1=abc.data.data.list;
        // console.log(data1)
        store.dispatch(changeTheatreid({
            theatre:theatre,
            venue:data1
        }));
        this.setState({
            theatre:theatre,
            venue:data1
        })
        // console.log(this.state.theatre);
         console.log(this.state.venue);
    }
}
