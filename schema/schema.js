//contains all of the knowledge required for telling graphql exactly what the applications data looks like. most importantly what properties each object has, and how exactly how each object is related to eachother
const graphql = require("graphql");
const _ = require("lodash");
//helpers from the graphql library:
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

//this is just the hardcoded user data we will work with rather than database data
const users = [
  { id: "23", firstName: "Bill", age: "20" },
  { id: "47", firstName: "Samantha", age: "21" }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
