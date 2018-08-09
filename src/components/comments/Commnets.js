import React, { Component } from 'react';

export class Commnets extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            title: '',
            email: '',
            body: '',
            like: 0
        };
    }

    render() {
        if (this.state.comments && this.state.comments.length) {
            return this.state.comments.map(comment => {
                return(
                    <div key={comment.id} className="Comment">
                        <button onClick={this.like.bind(this,1)}>Like: {this.state.like}</button>
                        <button onClick={this.like.bind(this,-1)}>Dislike: {this.state.like}</button>
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

    like = (increment) => {
        const like = this.state.like;
        this.setState({ like: like + increment });
    };
}