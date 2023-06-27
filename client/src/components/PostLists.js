import { useEffect } from "react";
import { getPosts } from "../services/posts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";

export function Postlists() {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     //   getPosts().then(setPosts)
  //     //   console.log(posts)
  //     getPosts().then((res) => setPosts([...res]));
  //   }, []);

  const { loading, error, value: posts } = useAsync(getPosts);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1 className="error-msg">{error}</h1>;
  return posts.map((posts) => (
    <div className="container">
      <h1 key={posts.id}>
        <Link to={`/posts/${posts.id}`}>{posts.title}</Link>
      </h1>
    </div>
  ));

  // <h1>{JSON.stringify(posts)}</h1>;
}
