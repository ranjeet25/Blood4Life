const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/data", (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var blood_group = req.body.blood_group;
  var age_group = req.body.age_group;
  var date = req.body.date;
  var adhaarID = req.body.adhaarID;
  var amount = req.body.amount;

  // console.log(firstname);

  var obj = new Object();

  obj = {
    firstname: firstname,
    lastname: lastname,
    blood_group: blood_group,
    age_group: age_group,
    date: date,
    adhaarID: adhaarID,
    amount: amount,
  };
  var arr = new Array();
  arr.push(obj);

  var contractData = new Object();
  const sdk = require("api")("@verbwire/v1.0#1v2exalfcs78nq");

  sdk.auth("sk_live_207a3f1f-ead1-4e33-a7e7-7700480ae466");
  sdk
    .postNftDeployDeploysimplecontract(
      {
        chain: "goerli",
        contractType: "nft721",
        contractName: "BloodDonation",
        contractSymbol: "SaveLife",
        recipientAddress: "gffg",
      },
      { accept: "application/json" }
    )
    .then(({ data }) => console.log(data))
    .catch((err) => console.error(err));

  console.log(arr);
});

app.listen(port, (res) => {
  console.log("Server is Started on port " + port);
});
