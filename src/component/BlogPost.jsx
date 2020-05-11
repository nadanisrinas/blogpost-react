import React, {useState, useEffect, Fragment} from "react"
import {BrowserRouter ,Router, Route, Link, withRouter, Switch} from "react-router-dom"
import CardBlogPost from "./CardBlogPost.jsx"
import DetailPost from "./DetailPost.jsx"
import "../assets/scss/BlogPost.scss"

const BlogPost = (props) => {
    const postID = props.posts.id;
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [id,setId] = useState(null); 
    
    useEffect(()=>{
        setTitle(props.posts.title);
        setBody(props.posts.body)
        setBody(props.posts.body);
        setId(props.posts.id);
    },[postID]);

    const onHandleDetail = (data) => {
        props.history.push(`/detail-post/${data.id}`);
    }

    return(
        <Fragment>
            <CardBlogPost key={props.posts.id}>
                <div className="row">
                    <div className="col-md-4">
                        <img className="blog-post-img" src="https://placeimg.com/640/480/tech" alt="pict"/>
                    </div>
                    <div className="col-md-8">
                        <h5 className="blog-post-title card-title" onClick={() => onHandleDetail(props.posts)}>{props.posts.title}</h5>
                        <p className="card-text">{props.posts.body}</p>
                        <div className="blog-post__btn">
                            <a href="#" className="btn blog-post__btn-remove" onClick={() => props.remove(props.posts.id)}>Remove</a>
                            <a href="#" className="btn blog-post__btn-edit" onClick={() => props.edit({id,title,body})}>Edit</a>
                        </div>
                    </div>
                </div>
            </CardBlogPost>
        </Fragment>
    )
}
export default withRouter(BlogPost)