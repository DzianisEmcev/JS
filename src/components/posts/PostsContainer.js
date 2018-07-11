import React, { Component } from 'react';
import {Posts} from "./Posts";

export class PostsContainer extends Component {

    render() {
        return(
            <div>
                <Posts posts={this.state.posts}/>
            </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            return response.json();
        }).then(posts => {
            this.setState({posts: posts});
        });
    }
}