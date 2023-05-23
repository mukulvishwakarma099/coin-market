import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, image, symbol, price, currencySymbol }) => {
  return (
    <div>
      <Link to={`/coins/${id}`}>
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
            {symbol}
          </Heading>
          <Text fontWeight={500} noOfLines={1}>
            {name}
          </Text>
          <Text noOfLines={1}>
            {price
              ? `${currencySymbol} ${price.toLocaleString("en-IN")}`
              : "NA"}
          </Text>
        </VStack>
      </Link>
    </div>
  );
};

export default CoinCard;
