import { makeRequests } from "./makeRequests";

export function getPosts() {

    return makeRequests('/posts')

}