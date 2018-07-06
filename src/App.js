import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Post} from './components/Post';
import {Time} from './components/Time';

class App extends Component
{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            return response.json();
        }).then(posts => {
            this.setState({posts: posts});
        });
    }
    render()
    {
        console.log(this.state);
        return <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">React Posts</h1>
            </header>
            <div>
                <Time/>
            </div>
            <div>
                {this.state.posts.map(item => (<Post name={item}/>))}
            </div>
        </div>
    }
}
export default App;
