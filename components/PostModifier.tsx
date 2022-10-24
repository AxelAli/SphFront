import { Button, FormControl, Input, Modal } from "native-base";
import React, { useState } from "react";
import { Post } from "../interfaces";

export default function PostModifier({
  post,
  dismissPost,
}: {
  post: Post;
  dismissPost: () => void;
}) {
  const [title, settitle] = useState(post.title);
  const deletePost = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    }).finally(() => dismissPost());

  const updatePost = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).finally(() => dismissPost());
  return (
    <Modal isOpen={!!post.id} onClose={() => dismissPost()}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Modify Post</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input value={title} onChangeText={settitle} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button colorScheme="red" onPress={deletePost}>
              Delete Post
            </Button>
            <Button onPress={() => updatePost()}>Update Post</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
