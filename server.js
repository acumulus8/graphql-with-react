const express = require("express");
const expressGraphyQL = require("express-graphql"); //compatability layer for the two to work together

const app = express();

app.use(
  "/graphql",
  expressGraphyQL({
    //can break the uppercase rule in these circumstances
    graphiql: true //dev tool that helps us use the premade application
  })
);

app.listen(4000, () => {
  console.log("listening!");
});
