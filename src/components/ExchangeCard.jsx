import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name, image, url, rank }) => {
  return (
    <div>
      <a href={url} target="blank">
        <VStack
          w={52}
          p={8}
          m={4}
          shadow={"lg"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          css={{
            ":hover": {
              transform: "scale(1.07)",
            },
          }}
        >
          <Image
            src={image}
            h={"10"}
            w={"10"}
            objectFit={"cover"}
            alt={`${name} image`}
          />
          <Heading size={"md"} noOfLines={1}>
            {rank}
          </Heading>
          <Text fontWeight={500} noOfLines={1}>
            {name}
          </Text>
        </VStack>
      </a>
    </div>
  );
};

export default ExchangeCard;
