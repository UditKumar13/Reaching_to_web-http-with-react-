import React, { Component } from 'react';
//import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
import Newpost from './NewPost/NewPost';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';



class Blog extends Component {

    render () {
       

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to ="/Posts/" exact 
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*
                <Route path="/" exact render={()=><h1>Home</h1>} />
                <Route path="/"  render={()=><h1>Home2</h1>} /> */ }
                <Switch>
                <Route path="/new-post" component={Newpost} />
                <Route path="/Posts"  component={Posts} />
                <Redirect from="/" to="/Posts" />
                {/*<Route path="/" component={Posts} />*/} 
                </Switch>
            </div>
        );
    }
}

export default Blog;