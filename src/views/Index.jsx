import React from "react";
import {
    Route,
    NavLink
} from 'react-router-dom';
import Home from "./Index/Home";
import Myjuooo from "./Index/Myjuooo";
<<<<<<< HEAD
import Theater from "./Index/Theater";
import Eticket from "./Index/Eticket";
=======
import Theatre from "./Index/Theatre";
import Eticket from "./Index/Eticket";
import '../assets/Index.css'
>>>>>>> 58a6883ee3b77cd09dcec047784ae0cc62ba8d66
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Route path={'/'} exact component={Home}></Route>
<<<<<<< HEAD
                <Route path={'/theatre'} component={Myjuooo}></Route>
                <Route path={'/eticket'} component={Theater}></Route>
                <Route path={'/myjuooo'} component={Eticket}></Route>
                <footer className={"footer"}>
                    <NavLink exact to={'/'}>首页</NavLink>|
                    <NavLink to={'/theatre'}>剧院</NavLink>|
                    <NavLink to={'/eticket'}>票夹</NavLink>|
                    <NavLink to={'/myjuooo'}>我的</NavLink>
=======
                <Route path={'/theatre'} component={Theatre}></Route>
                <Route path={'/eticket'} component={Eticket}></Route>
                <Route path={'/myjuooo'} component={Myjuooo}></Route>
                <footer className={"foot"}>
                    <NavLink exact to={'/'}><span>首页</span></NavLink>
                    <NavLink to={'/theatre'}><span>剧院</span></NavLink>
                    <NavLink to={'/eticket'}><span>票夹</span></NavLink>
                    <NavLink to={'/myjuooo'}><span>我的</span></NavLink>
>>>>>>> 58a6883ee3b77cd09dcec047784ae0cc62ba8d66
                </footer>
            </div>
        )
    }
}