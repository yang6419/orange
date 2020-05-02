import React from "react";
import {
    Route,
    NavLink
} from 'react-router-dom';
import Home from "./Index/Home";
import Myjuooo from "./Index/Myjuooo";
import Theater from "./Index/Theater";
import Eticket from "./Index/Eticket";
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Route path={'/'} exact component={Home}></Route>
                <Route path={'/theatre'} component={Myjuooo}></Route>
                <Route path={'/eticket'} component={Theater}></Route>
                <Route path={'/myjuooo'} component={Eticket}></Route>
                <footer>
                    <NavLink exact to={'/'}>首页</NavLink>|
                    <NavLink to={'/theatre'}>剧院</NavLink>|
                    <NavLink to={'/eticket'}>票夹</NavLink>|
                    <NavLink to={'/myjuooo'}>我的</NavLink>
                </footer>
            </div>
        )
    }
}