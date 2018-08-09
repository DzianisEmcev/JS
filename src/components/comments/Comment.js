import React, { Component } from 'react';

export class Comment extends Component {

    constructor(props) {
        super(props);
        this.state={
            like: 0,
            dislike: 0,
            comment: this.props.comLike
        };
    }

    render() {
        return (
        <div key={this.state.comment.id} className="Comment">
            <button onClick={this.like.bind(this)}>Like: {this.state.like}</button>
            <button onClick={this.dislike.bind(this)}>Dislike: {this.state.dislike}</button>
            <p>{this.state.comment.name}</p>
            <p>{this.state.comment.email}</p>
            <p>{this.state.comment.body}</p>
        </div>
        )
    }

    like = () => {
        const like = this.state.like;
        this.setState({ like: like + 1});
    };

    dislike = () => {
        const dislike = this.state.dislike;
        this.setState({ dislike: dislike + 1});
    };
}