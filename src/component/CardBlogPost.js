import React from "react"

const CardBlogPost = (props) => {
    return(
        <div className="card card-blog-post">
            <h5 className="card-header">Post</h5>
            <div className="card-body">
               {props.children}
            </div>
        </div>
    )
}

export default CardBlogPost