import React from 'react'

const Posts = ({posts, verify}) => {
    if(verify) {
        return <h2>Loading...</h2>;
    }

    return <ul className="list-group mb-4">
        {posts.map(post => (
            <li key={post.id} className="list-group-item">
                {post.title}
                {/* 
                <h2> {post.name} </h2>
                <h2> {post.adhaarNumber} </h2>
                <h2> {post.address} </h2>
                <h2> {post.status} </h2>
                 */}
            </li>
        ))}
    </ul>;
}

export default Posts