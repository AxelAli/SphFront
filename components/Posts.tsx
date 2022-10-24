import { ScrollView, Skeleton, useColorModeValue, useTheme } from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Post } from "../interfaces";
import PostCard from "./PostCard";
import PostModifier from "./PostModifier";

export default function Posts({
  loading,
  posts,
  selectPostId,
}: {
  loading: boolean;
  posts?: Post[];
  selectPostId: (id: number) => void;
}) {
  const [modifierPostId, setmodifierPostId] = useState<Post | undefined>();

  const { colors } = useTheme();
  return (
    <ScrollView
      style={{
        backgroundColor: useColorModeValue(colors.gray[50], colors.gray[700]),
      }}
    >
      {modifierPostId?.id && (
        <PostModifier
          post={modifierPostId}
          dismissPost={() => setmodifierPostId(undefined)}
        />
      )}
      {loading ? (
        <Skeleton h="220" style={{ marginLeft: "4%", width: "92%" }} />
      ) : (
        posts?.map((post) => (
          <Pressable
            key={post.id}
            onPress={() => selectPostId(post.id)}
            onLongPress={() => setmodifierPostId(post)}
          >
            <PostCard post={post} />
          </Pressable>
        ))
      )}
    </ScrollView>
  );
}
