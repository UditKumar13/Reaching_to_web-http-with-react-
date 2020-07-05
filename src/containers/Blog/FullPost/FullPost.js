import React, { Component } from 'react';
import axios from 'axios';


import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPosts:null
    }

    componentDidMount(){
        console.log(this.props);
        
        if (this.props.match.params.id){

            if (!this.state.loadedPosts || (this.state.loadedPosts && this.state.loadedPosts.id !== this.props.id)){
                axios.get('/posts/'+ this.props.match.params.id)
                .then(response=>{
    
                    //here if you change state in comdidupdate this goes into infinite loop.
                    //have to write condition only allow new post
                    this.setState({loadedPosts:response.data});
    
                    //console.log(response);
                });

            }
           
        }
    }

    deletePostHandler = ( ) => {
        axios.delete('/posts/'+ this.props.id)
        .then(response=>{
            console.log(response);
        });
    }

    render () {
        
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;

        if (this.props.id){
            post=<p style={{textAlign:'center'}}>Loading....</p>;
        }

        if (this.state.loadedPosts){
            
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPosts.title}</h1>
                <p>{this.state.loadedPosts.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );

        }
        return post;
    }
}

export default FullPost;