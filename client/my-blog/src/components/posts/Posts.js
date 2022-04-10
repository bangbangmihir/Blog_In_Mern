import React from 'react';
import "./posts.css";
import { Link } from 'react-router-dom';

export default function Posts({ post }) {
    const PF = "http://localhost:5000/images/"

    return (
        <div className="posts">
            {post.photo && (

                <img className="postsimg" src={PF + post.photo} alt="" />
            )}
            <div className="postsinfo">
                <div className="postscats">
                    {
                        post.categories.map((cat) => (

                            <span className="postscat">{cat.name}</span>
                        ))
                    }
                </div>
                <Link className="link" to={`/posts/${post._id}`}><span className="poststitle"> {post.title}</span></Link> 

                <hr />
                <span className="postsdate">{new Date(post.createdAt).toDateString()} </span>

            </div>
            
            <p className="postsdesc"> {post.desc}</p>



        </div>

    )
}
