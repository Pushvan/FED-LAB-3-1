import axios from "axios";
import { useEffect, useState } from "react";
import useSyncExternalStore from "use-sync-external-store";
function Lab16() {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Lab16">
      {console.log("data", data)}
      <h1>Hello CodeSandbox</h1>
      <p>This is the axios call</p>
      <ol>
        {data.map((x) => (
          <li key={x.id}>{x.title}</li>
        ))}
      </ol>
      <h1>This is the fetch call</h1>
      <ol>
        {posts.map((x) => (
          <li key={x.id}>{x.body}</li>
        ))}
      </ol>
    </div>
  );
}
export default Lab16;
