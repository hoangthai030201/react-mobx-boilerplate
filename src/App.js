import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import { Login } from 'components'

import './App.css';
import Test from './components/Test'
import Main from './Main';

class App extends Component {

    render() {

        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/' component={Main}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
