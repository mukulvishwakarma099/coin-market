import { Alert, AlertIcon, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      h={"full"}
      w={"full"}
    >
      <Alert
        status="error"
        height={"200px"}
        width={"50%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"10rem"}
        borderRadius={"2xl"}
      >
        <Stack
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AlertIcon boxSize={"30px"} />
          <Text fontSize={"1.2rem"} fontWeight={"500"} textAlign={"center"}>
            {message}
          </Text>
        </Stack>
      </Alert>
    </Stack>
  );
};

export default ErrorComponent;
