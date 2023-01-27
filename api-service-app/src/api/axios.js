import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "834510af971ed96a2cb9730eb9aba836",
        language: "ko-KR",
    }
});

export default instance;