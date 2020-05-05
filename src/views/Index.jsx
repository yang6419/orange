import React from "react";
import {
    Route,
    NavLink
<<<<<<< HEAD
} from 'react-router-dom';
import Home from "./Index/Home";
import Myjuooo from "./Index/Myjuooo";
import Theatre from "./Index/Theater.jsx";
import Eticket from "./Index/Eticket.jsx";
import '../assets/Index.css'
export default class Index extends React.Component {
    constructor(props) {
=======
} from 'react-router-dom';
import Home from "./Index/Home";
import Myjuooo from "./Index/Myjuooo";
import Theatre from "./Index/Theater";
import Eticket from "./Index/Eticket";
import '../assets/Index.css'
export default class Index extends React.Component {
    constructor(props) {
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <Route path={'/'} exact component={Home}></Route>
                <Route path={'/theatre'} component={Theatre}></Route>
                <Route path={'/eticket'} exact component={Eticket}></Route>
                <Route path={'/myjuooo'} exact component={Myjuooo}></Route>
                <footer className={"foot"}>
                    <NavLink exact to={'/'}><span>首页</span></NavLink>
                    <NavLink to={'/theatre'}><span>剧院</span></NavLink>
                    <NavLink to={'/eticket'}><span>票夹</span></NavLink>
                    <NavLink to={'/myjuooo'}><span>我的</span></NavLink>
=======
                <Route path={'/'} exact component={Home}></Route>
<<<<<<< HEAD
=======
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
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                <Route path={'/theatre'} component={Theatre}></Route>
                <Route path={'/eticket'} exact component={Eticket}></Route>
                <Route path={'/myjuooo'} exact component={Myjuooo}></Route>
                <footer className={"foot"}>
                    <NavLink exact to={'/'}><span>首页</span></NavLink>
                    <NavLink to={'/theatre'}><span>剧院</span></NavLink>
                    <NavLink  exact to={'/eticket'}><span>票夹</span></NavLink>
                    <NavLink to={'/myjuooo'}><span>我的</span></NavLink>
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
                </footer>
                
            </div>
        )
    }
}