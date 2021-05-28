import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://api.thegraph.com/subgraphs/name/nonameb3/exchange",
    // uri: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-lite",
    // uri: "https://api.bscgraph.org/subgraphs/name/pancakeswap/exchange-lite",
  }),
  cache: new InMemoryCache(),
});
