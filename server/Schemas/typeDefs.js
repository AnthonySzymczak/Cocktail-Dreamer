const {gql} = require("apollo-server-express");

const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    password: String
    cocktails: [Cocktails]
}
type Auth {
    token: ID!
    user: User
}
type Cocktail {
    cocktailId: String
    description: String
    image: String
}
type Query {
    cocktails: [Cocktails]
    
}
`

module.exports = typeDefs;