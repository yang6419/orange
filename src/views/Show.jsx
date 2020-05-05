import React, {Component} from 'react';
import store from "../store";
import axios from "axios";
import "../assets/style/css/show.css"
export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
           result:[],
           showList:store.getState().show.showList
        };
    }

   async getList(id){
        const {data} = await axios.get("/orange/show/Search/getShowList?category="+id);
       console.log(data);
       const showList = data.data.list;
       this.setState({
           showList
       })

    }

    render() {
        return (
            <div>
                <div className="show">
                    <div className="show_title">
                        <span><i></i>演出</span>
                        <div className="title_nav">
                            <i>...</i>
                        </div>
                    </div>
                    <div className="show_type">
<<<<<<< HEAD
                        <ul className={'nav'}>
                            {
                                this.state.result.map(v=>(
                                  <li key={v.id} onClick={this.getList.bind(this,v.id)}>{v.name}</li>
                                ))
                            }
                        </ul>
                        <div className="city_wrap">
                            <div className="city">
                                <span>全国  <i>i</i></span>
=======
                        <div className="nav">
<<<<<<< HEAD
                            <a href=";">全部</a>
                            <a href=";">演唱会</a>
                            <a href=";">音乐会</a>
                            <a href=";">话剧歌剧</a>
                            <a href=";">儿童亲子</a>
                            <a href=";">音乐剧</a>
                            <a href=";">戏曲综艺</a>
                            <a href=";">展览</a>
                            <a href=";">舞蹈芭蕾</a>
=======
                            <a href="#">全部</a>
                            <a href="#">演唱会</a>
                            <a href="#">音乐会</a>
                            <a href="#">话剧歌剧</a>
                            <a href="#">儿童亲子</a>
                            <a href="#">音乐剧</a>
                            <a href="#">戏曲综艺</a>
                            <a href="#">展览</a>
                            <a href="#">舞蹈芭蕾</a>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                            <div className="city_wrap">
                                <div className="city">
                                    <span>全国  <i>i</i></span>
                                </div>
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
                            </div>
                        </div>
                    </div>
                    <div className="show_main">
                        <ul className="show_module">
<<<<<<< HEAD
                            {
                                this.state.showList.map(v=>(
                                    <li key={v.schedular_id} onClick={
                                        this.props.history.push("/detail")
                                    }>
                                        <div className="falls">
                                            <img src={v.pic}/>
                                            <span>{v.city_name}</span>
                                            <div className="cell_info">
                                                <h3 className="info_title">{v.name}</h3>
                                                <p className={"time"}>{v.start_show_time}</p>
                                                <p className="info_price">{v.min_price}<b>起</b></p>
                                                <p className={"ticket"}>{v.support_desc}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
=======
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
                            <li>
                                <div className="falls">
<<<<<<< HEAD
                                    <img src="../assets/style/img/falls.jpg" alt=' '/>
=======
                                    <img src="./style/img/falls.jpg"/>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                                        <span>南京</span>
                                </div>
                                <div className="cell_info">
                                    <h3 className="info_title">[ 乐海方舟 x 刺猬现场 ] 联合呈现：“我有点紧张”新秀全国巡演 上海站</h3>
                                    <span className="time">2020.07.04 周六 20:00</span>
                                    <p className="info_price">￥380 <span>起</span></p>
                                </div>
                            </li>
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
   async componentDidMount() {
        const {data} = await axios.get("/orange/show/Index/getShowCategoryList?version=6.1.1&referer=2");
        // console.log(data);
        const result = data.data;
        this.setState(
            {
               result
            }
        );
       this.getList();
   }

}