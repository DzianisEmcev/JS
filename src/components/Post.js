import React, { Component } from 'react';
export class Post extends Component {
    render() {
        return(
            <div className="Post">
                <p>{this.props.name.title}</p>
                <p>{this.props.name.body}</p>
            </div>
        );
    }
}

