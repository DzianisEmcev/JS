import React, { Component } from 'react';

export class Post extends Component {

    deletePost(){
        this.props.deletePost(this.props.post.id);
    }

    render() {
        return (
            <div className="Post">
                <button type="button" onClick={this.deletePost.bind(this)}>Delete</button>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.body}</p>
                <p>{this.props.post.id}</p>
            </div>
        );
    }
}

