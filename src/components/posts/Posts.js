import React, { Component } from 'react';
import {Post} from "./Post";
import {PostCreator} from "./PostCreator";

export class Posts extends Component {

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
                <div>
                    <PostCreator createPost={this.createPost.bind(this)}/>
                </div>
                <div>
                    <input placeholder={"Search"} onChange={this.filterPosts.bind(this)}/>
                </div>
                <div>
                    {this.state.posts.map(
                        item => (<Post
                            savePost={this.savePost.bind(this)}
                            deletePost={this.deletePost.bind(this)}
                            key={item.id}
                            post={item}
                        />)
                    )}
                </div>
            </div>
        );
    }

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
        newPost.id = Math.max.apply(Math, this.state.posts.map(function(item){return item.id;})) +1;
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

    savePost(id, title, body){
        let posts = this.state.posts;
        let post = this.state.posts.filter(post => post.id === id)[0];
        post.title = title;
        post.body = body;
        this.setState({posts: posts});
    }

    filterPosts(event) {
        let posts = this.props.posts.filter(function(post) {
            return post.title.includes(event.target.value) || post.body.includes(event.target.value);
        });
        this.setState({posts:posts});
    }
}