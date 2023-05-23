import React, { useEffect, useState } from "react";
import { server } from "../App";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = new Array(132).fill(1);

  function changePage(page) {
    setPage(page);
    setLoading(true);
  }

  const fetchCoins = async () => {
    try {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=${currency}&page=${page}`
      );
      setCoins(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message="Error while fetching coins..." />;
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup p={8} value={currency} onChange={setCurrency}>
            <Text fontWeight={500}>Change currency</Text>
            <HStack spacing={4}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((item) => (
              <CoinCard
                key={item.id}
                id={item.id}
                name={item?.name}
                image={item?.image}
                symbol={item?.symbol}
                price={item?.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
        </>
      )}
      <HStack
        w={"full"}
        p={"8"}
        display={"flex"}
        alignItems={"center"}
        overflowX={"auto"}
      >
        {btns.map((item, index) => (
          <Button
            key={index}
            bgColor={"blackAlpha.900"}
            color={"white"}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Container>
  );
};

export default Coins;
