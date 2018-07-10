import React, { Component } from 'react';
import {Post} from "./Post";
import {PostCreator} from "./PostCreator";

export class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            sortType: 'title',
            posts: this.props.posts
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({posts: newProps.posts});
    }

    changeSortType(event) {
        this.setState({sortType: event.target.value});
    }

    sortPosts() {
        let posts = this.state.posts;
        let that = this;
        posts = posts.sort(function (a, b) {
            return ('' + a[that.state.sortType]).localeCompare(b[that.state.sortType]);
        });
        this.setState({posts: posts});
    }

    createPost(newPost){
        newPost.id = this.state.posts.length + 1;
        let posts = this.state.posts;
        posts.unshift(newPost);
        this.setState({posts: posts});
    }

    deletePost(id){
        let posts = this.state.posts.filter(function(post) {
            return post.id !== id;
        });
        this.setState({posts: posts});
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.sortPosts.bind(this)}>Sort</button>
                    <select className="form-control" onChange={this.changeSortType.bind(this)}>
                        <option value="title">By title</option>
                        <option value="body">By description</option>
                    </select>
                </div>
                <PostCreator createPost={this.createPost.bind(this)}/>
                <div>
                    {this.state.posts.map(
                        item => (<Post deletePost={this.deletePost.bind(this)} key={item.id} post={item}/>)
                    )}
                </div>
            </div>
        );
    }

}