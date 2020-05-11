import React,{useState, useEffect, useCallBack, Fragment} from "react"
import Axios from "axios"
import {withRouter} from "react-router-dom"
import CardBlogPost from "../component/CardBlogPost"
import "../assets/scss/DetailPost.scss"

const DetailPost = (props) => {
    const postID = props.match.params.id;
    console.log("postID ",postID);
    const [id,setId] = useState(postID);
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    // useEffect(() => {
    //     (async ()=>{
    //         const res = await Axios.get(`http://localhost:3004/posts/${id}`)
    //         const post = res.data;
    //         setTitle(post.title);
    //         setBody(post.body);
    //     })();
    // },[]);

    return(<div>detaillkasfkajf</div>)

    // const onHandleCancel = () => {
    //     props.history.push("/");
    // }
    

    // return(
    //     <Fragment>
    //         <CardBlogPost key={id}>
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-md-4">
    //                         <img className="detail-post-img" src="https://placeimg.com/640/480/tech" alt="pict"/>
    //                     </div>
    //                     <div className="col-md-8">
    //                         <h5 className="detail-post-title card-title">{title}</h5>
    //                         <p className="card-text">{body}</p>
    //                         <div className="detail-post__btn">
    //                             <a href="#" className="btn detail-post__btn-remove" onClick={() => props.remove(props.posts.id)}>Remove</a>
    //                             <a href="#" className="detail-post__btn-cancel" onClick={onHandleCancel}>Cancel</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </CardBlogPost>
    //     </Fragment>
    // )

}

export default DetailPost;