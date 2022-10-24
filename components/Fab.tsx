import {
  AddIcon,
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  MoonIcon,
  SearchIcon,
  Stagger,
  ThreeDotsIcon,
  useColorMode,
  useDisclose,
} from "native-base";
import React, { useState } from "react";
import PostCreator from "./PostCreator";

export const Fab = ({ reloadCallback }: { reloadCallback: () => void }) => {
  const { isOpen, onToggle } = useDisclose();
  const [openCreator, setopenCreator] = useState(false);
  const { toggleColorMode } = useColorMode();
  return (
    <Center
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "absolute",
        bottom: 12,
        margin: 4,
      }}
    >
      <Box>
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
        >
          <Button
            key="search"
            mb="4"
            variant="solid"
            bg="blue.400"
            colorScheme="blue"
            borderRadius="full"
            onPress={reloadCallback}
            rightIcon={<SearchIcon size="6" color="warmGray.50" />}
          >
            Search Again
          </Button>

          <Button
            key="theme"
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            onPress={toggleColorMode}
            rightIcon={<MoonIcon size="6" color="warmGray.50" />}
          >
            Toggle Theme
          </Button>

          <Button
            mb="4"
            key="post"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            onPress={() => setopenCreator(true)}
            rightIcon={<AddIcon size="6" color="warmGray.50" />}
          >
            Create Post
          </Button>
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <ThreeDotsIcon
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
      {openCreator && <PostCreator dismissPost={() => setopenCreator(false)} />}
    </Center>
  );
};
