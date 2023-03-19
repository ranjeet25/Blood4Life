const sdk = require("api")("@verbwire/v1.0#1v2exalfcs78nq");

sdk.auth("sk_live_10bec319-318c-4b3c-bd45-36300333102e");
sdk
  .postNftDeployDeploysimplecontract(
    {
      chain: "goerli",
      contractType: "nft721",
      contractName: "gffgf",
      contractSymbol: "gf",
      recipientAddress: "gffg",
    },
    { accept: "application/json" }
  )
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));
