import { Routes, Route } from "react-router-dom";
import { Postlists } from "./components/PostLists";
import { PostProvider } from "./contexts/PostContext";
import { Post } from "./components/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Postlists />} />
      <Route
        path="/posts/:id"
        element={
          <PostProvider>
            <Post />
          </PostProvider>
        }
      />
    </Routes>
  );
}

export default App;
