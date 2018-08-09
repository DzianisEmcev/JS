import React, { Component } from 'react';

export class Comment extends Component {

    constructor(props) {
        super(props);
        this.state={
            like: 0,
            comment: this.props.comLike
        };
    }

    render() {
        return (
            <div key={this.state.comment.id} className="Comment">
                <div>
                    <p>{this.state.like}</p>
                </div>
                <button onClick={this.like.bind(this,1)}>Like</button>
                <button onClick={this.like.bind(this,-1)}>Dislike</button>
                <p>{this.state.comment.name}</p>
                <p>{this.state.comment.email}</p>
                <p>{this.state.comment.body}</p>
            </div>
        )
    }

    like = (increment) => {
        const like = this.state.like;
        this.setState({ like: like + increment });
    };
}