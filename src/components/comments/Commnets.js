import React, { Component } from 'react';
import {Comment} from "./Comment";


export class Commnets extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: '',
            email: '',
            body: ''
        };
    }

    render() {
        if (this.state.comments && this.state.comments.length) {
            return this.state.comments.map(comment => {
                return(
                    <Comment comLike={comment}/>
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
}