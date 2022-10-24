import { Button, FormControl, Input, Modal } from "native-base";
import React, { useState } from "react";
import { Post } from "../interfaces";

export default function PostModifier({
  dismissPost,
}: {
  dismissPost: () => void;
}) {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const createPost = () =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).finally(dismissPost);
  return (
    <Modal isOpen onClose={dismissPost}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Create Post</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input value={title} onChangeText={settitle} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Body</FormControl.Label>
            <Input multiline value={body} onChangeText={setbody} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button onPress={() => createPost()}>Create</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
