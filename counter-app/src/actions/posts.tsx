import axios from "axios";

  // // Thunk action creator
  // const fetchPosts = (): any => {
  //   // Thunk function
  //   // dispatch와, getState 사용 가능 
  //   return async function fetchPostsThunk(dispatch: any, getState: any) {
  //     // dispatch로 action과 type을 전달. 
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  //     dispatch({ type: "FETCH_POSTS", payload: res.data });
  //   }
  // }

  export const fetchPosts = (): any => async(dispatch: any, getState: any) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    dispatch({ type: "FETCH_POSTS", payload: res.data });
  }

  export default fetchPosts;