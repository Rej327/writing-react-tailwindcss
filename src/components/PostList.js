import axios from "axios";
import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-white text-center text-xl h-full w-full py-4">
      List of Posts
      <div className="grid grid-cols-2 px-4 py-8">
        {" "}
        {posts.length
          ? posts.map((post) => <div key={post.id}> {post.title}</div>)
          : null}
      </div>
    </div>
  );
};

export default PostList;
