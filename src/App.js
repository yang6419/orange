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
class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route path={'/show'} component={Show}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route exact path={'/'} component={Index}></Route>
                    <Route path={'/register'} component={Register}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
