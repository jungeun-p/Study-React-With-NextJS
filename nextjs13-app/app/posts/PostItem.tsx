import Link from "next/link";
import React from "react";

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default PostItem;
