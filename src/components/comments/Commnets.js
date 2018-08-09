import React, { Component } from 'react';

export class Commnets extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            title: '',
            email: '',
            body: ''
        };
    }

    render() {
        if (this.state.comments && this.state.comments.length) {
            return this.state.comments.map(function (comment) {
                return(
                    <div key={comment.id} className="Comment">
                        <button onClick={this.like}>Like: {this.state.like}</button>
                        <button onClick={this.dislike}>Dislike: {this.state.dislike}</button>
                        <p>{comment.name}</p>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                )
            })
        }
        else {
            return(
                <div className="Comment">
                    <p>Loading</p>
                </div>
            )
        }
    }

    componentDidMount(){
        const postId = this.props.match.params.postId;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => {
            return response.json();
        }).then(comments => {
            this.setState({comments});
        });
    }

    state = {
        like: 0,
        dislike:0
    };

    like = () => {
        const like = this.state.like;
        this.setState({ like: like + 1 });
    };

    dislike = () => {
        const dislike = this.state.dislike;
        this.setState({ dislike: dislike + 1 });
    };
}