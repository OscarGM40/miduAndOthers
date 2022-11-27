import axios from "axios";

const githubToken =
  "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";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: { 
    Authorization: "Bearer " + githubToken
  }
})