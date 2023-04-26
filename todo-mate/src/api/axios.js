import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8090/api/collections/",
  params: {
    language: "ko-KR",
  },
  responseType: "json",
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export default instance;
