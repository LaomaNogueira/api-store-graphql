const models = require('../models');
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
    email: { type: GraphQLString },
    cpf: { type: GraphQLString },
    birthdate: { type: GraphQLString },
    address_id: { type: GraphQLInt },
};

//TYPEDEFS:
const typeDefs = new GraphQLObjectType({
    name: 'Costumer',
    fields: () => (argsDefs)
});

//QUERIES:
const GET_ALL_COSTUMERS = {
    type: new GraphQLList(typeDefs),
    resolve: () => {
        return models.costumer.findAll()
    }
};


//MUTATIONS:
const CREATE_COSTUMER = {
    type: typeDefs,
    args: argsDefs,
    resolve(_, args) {
        return models.costumer.create(args)
    }
};

const UPDATE_COSTUMER = {
    type: typeDefs,
    args: argsDefs,
    resolve(_, args) {
        return models.costumer.update(args, { where: { id: args.id } } );
    }
};

const DELETE_COSTUMER = {
    type: typeDefs,
    args: argsDefs,
    resolve(_, { id }) {
        return models.costumer.destroy( { where: { id: id } } );
    }
};

module.exports = {
    GET_ALL_COSTUMERS,
    CREATE_COSTUMER,
    UPDATE_COSTUMER,
    DELETE_COSTUMER
}