const { AuthenticationError}= require('apollo-server-express');
const {User, Cocktail} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        cocktails: async () => {
            return await Cocktail.find();
        },
       
            
    }
}


module.exports = resolvers