import fs from "fs";
import path from "path";
import matter from 'gray-matter';

// process.cwd(): node를 통한 directory 절대 경로
// path: 폴더와 파일의 경로를 지정해주는 모듈 
// path.join(): 하나의 경로로 합침(상대 경로)
const postsDirectory = path.join(process.cwd(), "posts");
console.log('postDirectory', postsDirectory);
// Users/peterlim/Downloads/next-typescript/posts

export function getSortedPostsData() {
    // fs: 파일을 읽는 기능의 모듈
    // fs.readdirSync(): 파일 이름 배열로 저장
    const fileNames = fs.readdirSync(postsDirectory);
    // log: fileNames = [ 'pre-rendering.md', 'ssg-ssr.md' ]

    const allPostsData = fileNames.map(fileName => {
        // '.md' 제거
        const id = fileName.replace(/\.md$/, '');
        // log: id = pre-rendering, ssg-ssr

        const fullPath = path.join(postsDirectory, fileName);
        // log: postDirectory/{filename}
        
        // fs.readFilesync(): file content 읽기
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // matter: md file를 object로 convert 처리
        const matterResult = matter(fileContents);

        // combine the data with the id 
        return {
            id, 
            ...(matterResult.data as { date: string; title: string })
        }
    })
    // sort: 배열 요소를 정렬
    return allPostsData.sort((a, b) => {
        if(a.date < b.date) {
            return 1
        } else { 
            return -1
        }
    })
}