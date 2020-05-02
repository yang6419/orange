import React from 'react';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import Index from "./views/Index";
import Login from "./views/Login";
<<<<<<< HEAD
import Detail from "./views/Detail.jsx";
import  Tour from "./views/Tour.jsx";
=======
>>>>>>> 58a6883ee3b77cd09dcec047784ae0cc62ba8d66
class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Switch>
<<<<<<< HEAD
                    <Route path={'/tour'} component={Tour}></Route>
                    <Route path={'/detail'} component={Detail}></Route>
=======
>>>>>>> 58a6883ee3b77cd09dcec047784ae0cc62ba8d66
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/'} component={Index}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
