import React, {Fragment} from "react"
import CardBlogPost from "./CardBlogPost"
import "../assets/css/BlogPost.scss"

const BlogPost = (props) => {
    console.log(props);
    return(
        <Fragment>
            {props.posts.map(post => {
            return(
            <CardBlogPost key={post.id}>
                <div className="row">
                    <div className="col-md-6">
                        <img className="blog-post-img" src="https://placeimg.com/640/480/tech" alt="pict"/>
                    </div>
                    <div className="col-md-6">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.author}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </CardBlogPost>
            )
            })};
        </Fragment>
    )

}
export default BlogPost