const { request, } = require("graphql-request");
const subgraphUrl = "https://subgraph.satsuma-prod.com/b3cd6ab10b28/kresko/arbitrum-core/api"
const query = `
query protocolData {
  history: protocolHistories(
    first: 1
    orderBy: blockTimestamp
    orderDirection: desc
  ) {
    tvlUSD
  }
}
`;

async function tvl() {
  const {history} = await request(subgraphUrl, query);

  return history[0].tvlUSD
}



module.exports = {
  methodology: 'TVL from Kresko Arbitrum subgraph.',
  start: 188414406,
  arbitrum: {
    fetch: tvl
  },
  fetch: tvl
};