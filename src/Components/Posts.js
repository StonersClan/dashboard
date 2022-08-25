import React from 'react'
import './Posts.css';
const Posts = ({posts, verify}) => {
    if(verify) {
        return <h2>Loading...</h2>;
    }

    return <ul className="list-group">
        {posts.map(post => (
            <li key={post.id} className="list-group-item">
                <h2 className="service_provider_name">{post.title}</h2>
                <h2 className="status">{post.id}</h2>
            </li>
        ))}
    </ul>;
}

export default Posts