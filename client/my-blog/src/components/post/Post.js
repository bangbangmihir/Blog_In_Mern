import React from 'react'
import "./post.css"
import Posts from '../posts/Posts'

export default function Post({posts}) {
    return (
        <div className="posts">
        {
            posts.map((p)=>(
                <Posts post={p}/>
            ))
        }
        
        
            
        </div>
    )
}
