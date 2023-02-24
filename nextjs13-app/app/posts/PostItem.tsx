'use client';

import Link from "next/link";
import React from "react";
import postStyles from "@/styles/Home.module.css";
import { useRouter } from "next/navigation";

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  
  const router = useRouter();
  const deletePost = async (id: string) => {
    await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <div>
      <div className={postStyles.content}>
        <input 
          type="checkbox"
          onChange={() => deletePost(id)}
        />
        <Link href={`/posts/${id}`}>
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
