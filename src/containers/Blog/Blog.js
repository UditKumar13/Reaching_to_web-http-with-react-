import React, { Component } from 'react';
//import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
import Newpost from './NewPost/NewPost';
import {Route,Link} from 'react-router-dom';



class Blog extends Component {

    

   
   

    render () {
       

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to={{
                                pathname:this.props.match.url + '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*
                <Route path="/" exact render={()=><h1>Home</h1>} />
                <Route path="/"  render={()=><h1>Home2</h1>} /> */ }
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={Newpost} />
            </div>
        );
    }
}

export default Blog;