import { makeRequests } from "./makeRequests";

export function getPosts() {
  return makeRequests("/posts");
}

export function getPost(id) {
  return makeRequests(`/posts/${id}`);
}
