import FormData from "form-data";
import fetch from "node-fetch";
var formData = new FormData();

var data = "dghgdhgd";

formData.append("chain", "mumbai");
formData.append("contractType", "nft1155");
formData.append("contractSymbol", "test");
formData.append("contractName", data);
formData.append(
  "recipientAddress",
  "0xef836059e44F8eE7a756E31f1bCD6852B9bEe639"
);
// formData.append('test', 'hello');

const url = "https://api.verbwire.com/v1/nft/deploy/deploySimpleContract";
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "X-API-Key": "sk_live_402b045d-791b-40b9-a945-56455a722b77",
  },
};

options.body = formData;

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
