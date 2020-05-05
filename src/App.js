import React from 'react';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";
import Show from "./views/Show";
import Detail from "./views/Detail.jsx";
import  Tour from "./views/Tour.jsx";
import  AddNameTick from "./views/Add_ticket.jsx";
class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route path={'/addNametickte'} component={AddNameTick}></Route>
                    <Route path={'/show'} component={Show}></Route>
                    <Route path={'/tour'} component={Tour}></Route>
                    <Route path={'/detail'} component={Detail}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/register'} component={Register}></Route>
                    <Route path={'/'} component={Index}></Route>   
                </Switch>
            </div>
        );
    }
}

export default App;
