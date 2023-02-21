import { getAllPostIds, getPostData, getSortedPostsData } from '@/lib/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react'

interface postData {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}

const Post = ({ postData }: postData) => {
    return (
        <div>
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

// path값을 받아와서 params를 전달
export const getStaticPaths: GetStaticPaths = async () => {
    // path id값을 반환
    const paths = getAllPostIds();
    // [{ params: {id: 'pre-rendering}. {param...} }]
    return {
        paths,
        fallback: false
    }
}

// params를 전달 받아서 
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props:{
            postData
        }
    }
}
