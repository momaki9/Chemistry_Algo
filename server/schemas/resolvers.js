const { AuthenticationError } = require('apollo-server-express');
const { User, Algo } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        instance: async (parent, { instanceId }) => {
            return Algo.findOne({ _id: instanceId })
        },
        algos: async () => {
            return Algo.find();
        }
    },
    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Profile not found')
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
        createUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers;