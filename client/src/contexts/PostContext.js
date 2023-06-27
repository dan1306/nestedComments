import React, { useContext, useMemo } from "react";
import { useAsync } from "../hooks/useAsync";
import { getPost, getPosts } from "../services/posts";
import { useParams } from "react-router-dom";

const Context = React.createContext();

export function usePost() {
  return useContext(Context);
}

export function PostProvider({ children }) {
  const { id } = useParams();
  console.log(id);
  const { loading, error, value: post } = useAsync(() => getPost(id), [id]);
  console.log("post: ", post);
  const commentsByParentId = useMemo(() => {
    if (post?.comments == null) return [];

    const group = {};

    post.comments.forEach((comment) => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });

    return group;
  }, [post?.comments]);
  console.log("commentsByParentId: ", commentsByParentId);

  // function getReplies(parentId) {
  //   return commentsByParentId[[pare]]
  //  }
  
  return (
    <Context.Provider
      value={{
        post: {
          id,
          ...post,
        },
      }}
    >
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1 className="error-msg">{error}</h1>
      ) : (
        children
      )}
    </Context.Provider>
  );
}
