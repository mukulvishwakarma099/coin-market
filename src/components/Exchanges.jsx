import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../App";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchExchange = async () => {
    try {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchange();
  }, []);

  if (error) return <ErrorComponent message="Error while fetching..." />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchanges.map((item) => (
            <ExchangeCard
              key={item.id}
              name={item?.name}
              image={item?.image}
              url={item?.url}
              rank={item?.trust_score_rank}
            />
          ))}
        </HStack>
      )}
    </Container>
  );
};

export default Exchanges;
