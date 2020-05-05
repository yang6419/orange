import React from "react";
import axios from "axios";
import store from "../../store";
import '../../assets/Theater/Theater.css';
import ShowList from "../../components/theater/Theater_showList";
import {changeCategory} from "../../store/actionCreator/theater";
import {
    Link
} from 'react-router-dom';
export default class Theatre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theaterList:store.getState().theater.theaterList
        }
    }

    render() {
        return (
            <div className="theater">
                <header className='theater_header'><h3>剧院</h3></header>
                <section className="main">
                <ul>
                    {
                      this.state.theaterList.map(v=>(
                        <li key={v.id}>
                            <div className="mainT">
                                <div className="maintop">
                                    <Link to={{
                                        pathname:'detail',
                                        state:{theatre_id:v.id,venue_id:v.vid}
                                    }}>
                                        <div className='maintop-a-img'>
                                            <img src={''+v.pic} alt=""/>
                                        </div>
                                        <div className='maintop-a-text'>
                                            <p>{v.name}</p>
                                            <span>{v.count}</span>在线演出
                                        </div>
                                    </Link>
                                </div>
                                <div className="maincenter">
                                    {
                                        v.showList.map(v=>(
                                            // 222
                                            <ShowList {...v} key={v.id}></ShowList>
                                        ))
                                    }  
                                </div>
                            </div>
                        </li>
                      )) 
                    }
                </ul>
                </section>
            </div>
        )
    }
    async componentDidMount() {
        const {data} = await axios.get("/orange/theatre/index/getTheatreList");
        console.log(data)
        
        // console.log(theaterList);
        for(let i=0;i<data.data.theatre_list.length;i++){
            if(data.data.theatre_list[i].showList.length<=0){
                data.data.theatre_list.splice(i,1);
                i--;
            }
        }
        const theaterList = data.data.theatre_list;
        console.log(theaterList);
        store.dispatch(changeCategory(theaterList));
        this.setState({
            theaterList:store.getState().theater.theaterList
        })
        // console.log(this.state.theaterList);
    }
}