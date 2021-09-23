const { AuthenticationError}= require('apollo-server-express');
const {User, Cocktail} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        cocktails: async () => {
            return await Cocktail.find();
        },
       
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'cocktails.Users',
                populate: 'cocktail'
              });
      
              user.cocktails.sort((a, b) => b.cocktails - a.cocktails);
      
              return user;
            }
      
            throw new AuthenticationError('Sorry you are not logged in!');
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          addCocktail: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
              const cocktail = new Cocktail({ Cocktails });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { cocktails: cocktail } });
      
              return order;
            }
      
            throw new AuthenticationError('Sorry you are not logged in!');
          },
          updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Sorry you are not logged in!');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('This passowrd is incorrect, Try again');
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
    }
    
};


module.exports = resolvers