import {
  Actionsheet,
  Box,
  HStack,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { PostComment } from "../interfaces";

export default function PostComments({
  selectedPostId,
  dismissPostId,
}: {
  selectedPostId?: number;
  dismissPostId: () => void;
}) {
  const [comments, setComments] = useState<PostComment[]>();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${selectedPostId}/comments`
    )
      .then((x) => x.json())
      .then((comments) => setComments(comments))
      .finally(() => setloading(false));
  }, [selectedPostId]);

  return (
    <Actionsheet isOpen={!!selectedPostId} onClose={dismissPostId}>
      <Actionsheet.Content>
        <Box w="100%" h={60} px={4} justifyContent="center">
          <Text
            fontSize="16"
            color="gray.500"
            _dark={{
              color: "gray.300",
            }}
          >
            Post Comments
          </Text>
        </Box>
        <ScrollView minH={800}>
          {loading ? (
            <Spinner size="lg" />
          ) : (
            comments?.map((comment) => Comment(comment))
          )}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

function Comment(post: PostComment) {
  return (
    <Box key={post.id} pl="4" pr="5" py="2" margin={2}>
      <HStack alignItems="center" space={3}>
        <VStack>
          <Text
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            bold
          >
            {post.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            by {post.email}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {post.body}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
