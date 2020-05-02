import React from "react";
import '../assets/Theater/Theater_detail.css';
// import axios from "axios";
import store from "../store";
// import {changeDealiList} from "../store/actionCreator/theater";
export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailList:store.getState().theater.detailList
        }
    }

    render(){
        return (
            <div  className='detail'>
                <div  className='body'>
                    <header>
                        <div className='header-one'>
                            <i></i>
                        </div>
                        <div className='header-two'>
                            <div className='header-two-center'>
                            <div className='header-two-center-top'>
                                <div className='header-two-center-top-img'>
                                {/* <img></img> */}
                                </div>
                                <div className='header-two-center-top-text'>
                                    <p>南山文体中心</p>
                                    <span>93场演出</span>
                                </div>
                            </div>
                            <div className='header-two-center-position'>
                                <span>深圳 &nbsp;|&nbsp;广东省深圳市南山区南山大道和南头街交汇处</span>
                                <i></i>
                            </div>
                            </div>
                        </div>
                        <div className='header-three'>
                            热门演出
                        </div>
                    </header> 
                    <section>
                        <div className='section-body'>
                            <div className='section-body-one'>
                                <div className='section-body-one-img'>
                                    {/* <img></img> */}
                                </div>
                                <div className='section-body-one-text'>
                                    <div className='section-body-one-text-top'>
                                        <span>2020.06.12-06.14</span>
                                    </div>
                                    <div className='section-body-one-text-center'>
                                        <span>演出延期</span>
                                    </div>
                                    <div className='section-body-one-text-place'>
                                        深圳 |南山文体中心剧院大剧院
                                    </div>
                                </div>
                            </div>
                            <div className='section-body-two'>
                                <span>电子票</span>
                                <span>可选座</span>
                                <span>限时8折起</span>
                            </div>
                            <div className='section-body-three'>
                                <span>￥280</span>
                                <span>起</span>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="normal">没有更多了</div>
            </div>
        )
    }
    async componentDidMount() {
        console.log(this.props)
        // const {data} = await axios.get("/orange/Show/Search/getShowList"+this.state)
        
        // console.log(data);
        // const detailList = data.data.list;
        // store.dispatch(changeDealiList(detailList));
        // this.setState({
        //     detailList:store.getState().theater.detailList
        // })
        // console.log(this.state.detailList);
    }
}
