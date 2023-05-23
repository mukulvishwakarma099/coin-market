import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack height={"90vh"} justifyContent={"center"}>
      <Box
        transform={"scale(2)"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Spinner size={"xl"} />
        <Text fontSize={"xl"}>Loading...</Text>
      </Box>
    </VStack>
  );
};

export default Loader;
