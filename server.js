const express = require("express");
const expressGraphQL = require("express-graphql"); //compatability layer for the two to work together
const schema = require('./schema/schema');

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema, //es6 magic - key and value are the same so the single name = schema: schema,
    //can break the uppercase rule in these circumstances
    graphiql: true //dev tool that helps us use the premade application
  })
);

app.listen(4000, () => {
  console.log("listening!");
});
