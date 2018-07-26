import React, { Component } from 'react';

export class TestRouter extends Component {

    render() {
        const Idcomments = this.props.match.params.postId;
        fetch(`https://jsonplaceholder.typicode.com/posts/${Idcomments}/comments`).then(response => {
            return response.json();
        }).then(comments => {
            this.setState({comments});
        });
        return(
            <p>{this.props.match.params.posts}</p>
        );
    }
}