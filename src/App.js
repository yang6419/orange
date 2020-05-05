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
<<<<<<< HEAD
import Detail from "./views/Detail.jsx";
import  Tour from "./views/Tour.jsx";
=======
import Detail from "./views/Detail.jsx";
import  Tour from "./views/Tour.jsx";
import  AddNameTick from "./views/Add_ticket.jsx";
=======
<<<<<<< HEAD
import Register from "./views/Register";
import Show from "./views/Show";
=======
<<<<<<< HEAD
import Detail from "./views/Detail.jsx";
import  Tour from "./views/Tour.jsx";
=======
>>>>>>> 58a6883ee3b77cd09dcec047784ae0cc62ba8d66
>>>>>>> 81311af07913d68d423e97f55b621db14da2e8f4
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Switch>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Route path={'/addNametickte'} component={AddNameTick}></Route>
                    <Route path={'/show'} component={Show}></Route>
                    <Route path={'/tour'} component={Tour}></Route>
                    <Route path={'/detail'} component={Detail}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/register'} component={Register}></Route>
                    <Route path={'/'} component={Index}></Route>   
=======
<<<<<<< HEAD
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
                    <Route path={'/show'} component={Show}></Route>
                    <Route path={'/tour'} component={Tour}></Route>
                    <Route path={'/detail'} component={Detail}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/register'} component={Register}></Route>
<<<<<<< HEAD
                    <Route path={'/'} component={Index}></Route>
=======
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
                </Switch>
            </div>
        );
    }
}

export default App;
