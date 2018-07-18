import React, {Component} from 'react';
import logo from '../logos/logo.svg';
import '../styles/App.css';
import {PostsContainer} from './posts/PostsContainer';
import {Time} from './time/Time';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Posts</h1>
                </header>
                <div>
                    <Time/>
                </div>
                <div>
                    <PostsContainer/>
                </div>
            </div>
        );
    }
}

export default App;
