import React, {Component} from 'react';
import logo from '../logos/logo.svg';
import '../styles/App.css';
import {PostsContainer} from './posts/PostsContainer';
import {Time} from './time/Time';
import { BrowserRouter, Route} from "react-router-dom";
import {Commnets} from "./comments/Commnets";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">React Posts</h1>
                    </header>
                    <div>
                        <Time/>
                    </div>
                    <div>
                        <Route exact path="/" component={PostsContainer} />
                        <Route path="/posts/new/:postId" component={Commnets} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
