import React from 'react'
import PostItem from './PostItem';

const getPosts = async() => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records', { 
        cache: 'no-store' 
    });
    const data = await res.json();
    return data?.items as any[];
}

const PostPage = async () => {
    const posts = await getPosts();
    return (
        <div>
            <h1>Posts</h1>
            {posts?.map((post) => {
                return <PostItem key={post.id} post={post} />
            })}
        </div>
    )
}

export default PostPage;
