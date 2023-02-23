import { getAllPostIds, getPostData } from '@/lib/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import postStyles from '@/styles/Post.module.css'


interface postDataType {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}

const Post = ({ postData }: postDataType) => {
    return (
        <div className={postStyles.container}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
            </article>
        </div>
    )
}

export default Post;

// 1. 동적 라우팅을 구현하여 path(params)를 반환
export const getStaticPaths: GetStaticPaths = () => {
    // path id값 반환
    const paths = getAllPostIds();
    // [{ params: {id: 'pre-rendering}, {param...} }]
    return {
        paths,
        fallback: false
    }
}

// 2. 전달받은 params를 받아 props(data)를 반환하며 데이터 출력
export const getStaticProps: GetStaticProps = async({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData
        }
    }

}