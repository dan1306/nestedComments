import { Routes,  Route } from "react-router-dom";
import { Postlists } from "./components/PostLists";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Postlists />} />
      <Route path="/posts/:id" element={<h1>himeme</h1>} />
    </Routes>
  );
}

export default App;
