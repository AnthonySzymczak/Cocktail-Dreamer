const { AuthenticationError}= require('apollo-server-express');

const resolvers = {
    Query: {
        cocktails: async () => {
            return await Cocktail.find();
        }
    }
}


module.exports = resolvers