import React, { Component } from 'react';

export class Post extends Component {

    render() {
        return this.state.isEdit ? (
            <div className="Post">
                <button type="button" onClick={this.savePost.bind(this)}>Ok</button>
                <input type="text" value={this.state.title} onChange={this.changeTitle.bind(this)}/>
                <textarea  value={this.state.body} onChange={this.changeBody.bind(this)}/>
            </div>
            ) : (
            <div className="Post">
                <button type="button" onClick={this.deletePost.bind(this)}>Delete</button>
                <button type="button" onClick={this.editPost.bind(this)}>Edit</button>
                <a href={`/post/new/${this.props.post.id}`}>{this.state.title}</a>
                <p>{this.state.body}</p>
                <p>{this.props.post.id}</p>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state={
            isEdit:false,
            title: props.post.title,
            body: props.post.body
        };
    }

    deletePost(){
        this.props.deletePost(this.props.post.id);
    }

    editPost() {
        this.setState({
            isEdit:true
        });
    }

    changeTitle(event){
        this.setState({
            title: event.target.value
        });
    }

    changeBody(event){
        this.setState({
            body: event.target.value
        });
    }

    savePost() {
        this.props.savePost(this.props.post.id, this.state.title, this.state.body);
        this.setState({
            isEdit:false
        });
    }
}