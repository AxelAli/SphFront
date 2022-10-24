import {
  Box,
  Stack,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "native-base";
import React from "react";
import { Post } from "../interfaces";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Box
      key={post.id}
      style={{
        margin: "4%",
        marginBottom: "0%",
        width: "92%",
        backgroundColor: useColorModeValue("gray.50", "gray.700"),
      }}
    >
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor={useColorModeValue("coolGray.200", "coolGray.600")}
        borderWidth="1"
      >
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading
              size="md"
              ml="-1"
              color="violet.500"
              _dark={{
                color: "violet.400",
              }}
            >
              {post.title}
            </Heading>
          </Stack>
          <Text fontWeight="400">{post.body}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                fontWeight="400"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                User: {post.userId}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
