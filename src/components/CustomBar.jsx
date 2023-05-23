import { Badge, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";

const CustomBar = ({ high, low }) => {
  return (
    <VStack>
      <Progress value={50} colorScheme="whatsapp" w="full" />
      <HStack justifyContent={"space-between"} w="full">
        <Badge children={low} colorScheme="red" />
        <Text fontSize={"small"}>24H range</Text>
        <Badge children={high} colorScheme="green" />
      </HStack>
    </VStack>
  );
};

export default CustomBar;
