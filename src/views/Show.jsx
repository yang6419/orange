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
                            </div>
                        </div>
                    </div>
                    <div className="show_main">
                        <ul className="show_module">
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