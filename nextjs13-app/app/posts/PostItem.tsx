import Link from 'next/link';
import React from 'react'

const PostItem = ({ post }: any) => {
    const { id, title, created } = post || {};
    return (
        <Link href={`/posts/${id}`}>
            <div>
                <h3>
                    {title}
                </h3>
                <p>{created}</p>
            </div>
        </Link>
    )
}

export default PostItem;