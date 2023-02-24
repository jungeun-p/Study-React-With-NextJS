import React from "react";

async function getPost(postId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`, {
        next: { revalidate: 10 } // cache 데이터를 일정 시간 감격으로 검증
    });
    const data = await res.json();
    return data;
}

const PostDetailPage = async ({ params }: { 
    params: {
    id: string
} }) => {
    const post = await getPost(params.id);
  return <div>
      <h1>Posts/{post.id}</h1>
      <div>
          <h3>{post.title}</h3>
          <p>{post.created}</p>
      </div>
  </div>;
};

export default PostDetailPage;
