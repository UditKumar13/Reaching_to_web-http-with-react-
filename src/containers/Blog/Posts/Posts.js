import React, {Component} from 'react';
import axios from '../../../axios';
import './Posts.css';
import Post from '../../../components/Post/Post';


class Posts extends Component {
    state={
        posts:[]
    };

    componentDidMount() {

        console.log(this.props);

        axios.get ('/posts')
        .then(response=>{
        
            const posts=response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return {
                    ...post,
                    author:'Uk'
                }
            });
            this.setState({posts:updatedPosts});
            //console.log(response);
        })
        .catch(error=>{
             console.log(error);
            });
             
    }

    postSelectedHandler = (id) =>{
    this.props.history.push({pathname:'/'+id});
    //this.props.history.push('/'+id);
    }


render(){
    let posts =<p style={{textAlign:'center'}}>Something went wrong !</p>;
    if (!this.state.error){

        posts = this.state.posts.map(post=>{
            return  (
            //<Link to={'/' + post.id} >
            <Post 
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={()=>this.postSelectedHandler(post.id)}/>
            //</Link>
             )
        });

    }
    return (
        <section className="Posts">
        {posts}
    </section>
    );
}

}

export default Posts;
