import React, { useEffect, useState } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import TopBar from "./components/TopBar";
import { Post } from "./interfaces";
import { Fab } from "./components/Fab";
import SafeArea from "./components/SafeArea";
import Posts from "./components/Posts";
import PostComments from "./components/PostComments";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [posts, setposts] = useState<Post[]>();
  const [filterText, setfilterText] = useState<number | undefined>();
  const [loading, setloading] = useState(true);
  const [selectedPost, setselectedPost] = useState<number | undefined>();
  const handleFilterTextChange = (x: string) => setfilterText(parseInt(x));

  const fetchPosts = () => {
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((x) => x.json())
      .then((posts) => setposts(posts))
      .finally(() => setloading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts?.filter((post: Post) =>
    filterText ? post.userId == filterText : true
  );

  return (
    <NativeBaseProvider theme={theme}>
      <SafeArea />
      <TopBar
        value={filterText?.toString()}
        handleChange={handleFilterTextChange}
      />
      <Posts
        loading={loading}
        posts={filteredPosts}
        selectPostId={(postId) => setselectedPost(postId)}
      />

      <Fab reloadCallback={fetchPosts} />
      <PostComments
        selectedPostId={selectedPost}
        dismissPostId={() => setselectedPost(undefined)}
      />
    </NativeBaseProvider>
  );
}
