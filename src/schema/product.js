const models = require('../models');
//const addressType = require('./address').typeDefs
const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLID, 
    GraphQLString, 
    GraphQLInt 
} = require('graphql');

const argsDefs = {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
    weight: { type: GraphQLString },
    price: { type: GraphQLString },
    quantity_stock: { type: GraphQLInt }
};

//TYPEDEFS:
const typeDefs = new GraphQLObjectType({
    name: 'Order',
    fields: () => (argsDefs)
});

//QUERIES:
const GET_ALL_PRODUCTS = {
    type: new GraphQLList(typeDefs),
    resolve: () => {
        return models.product.findAll()
    }
};

const GET_PRODUCT = {
    type: new GraphQLList(typeDefs),
    args: argsDefs,
    resolve: (_, args) => {
        return models.product.findOne(args, { where: { id: args.id } })
    }
};

//MUTATIONS:
const CREATE_PRODUCT = {
    type: typeDefs,
    args: argsDefs,
    resolve(_, args) {
        return models.product.create(args)
    }
};

const UPDATE_PRODUCT = {
    type: typeDefs,
    args: argsDefs,
    resolve(_, args) {
        const { name, image, description, weight, price, quantity_stock } = args;
        return models.product.update(args, { where: { id: args.id } })
    }
};

const DELETE_PRODUCT = {
    type: typeDefs,
    args: argsDefs,
    resolve(_, { id }) {
        return models.product.destroy( { where: { id: id } })
    }
};

module.exports = {
    typeDefs,
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
}