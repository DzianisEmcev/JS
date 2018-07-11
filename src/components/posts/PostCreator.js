import React, { Component } from 'react';

export class PostCreator extends Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="Title" onChange={this.setTitle.bind(this)}/>
                <textarea placeholder="Description" onChange={this.setDescription.bind(this)}/>
                <button type="button" onClick={this.createPost.bind(this)}>Add</button>
            </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    setTitle(event){
        this.setState({title: event.target.value});
    }

    setDescription(event){
        this.setState({body: event.target.value});
    }

    createPost(){
        this.props.createPost({
            title: this.state.title,
            body: this.state.body
        });
    }
}
