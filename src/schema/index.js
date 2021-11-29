const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { 
    GET_ALL_COSTUMERS, 
    GET_COSTUMER,
    DELETE_COSTUMER,
    CREATE_COSTUMER,
    UPDATE_COSTUMER
} = require('./costumer');

const { 
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} = require('./product');


//EXPORT QUERIES AND MUTATIONS
module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQuery",
        fields: {
            getAllCostumers: GET_ALL_COSTUMERS,
            getAllProducts: GET_ALL_PRODUCTS,
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutation",
        fields: {
            createCostumer: CREATE_COSTUMER,
            updateCostumer: UPDATE_COSTUMER,
            deleteCostumer: DELETE_COSTUMER,
            createProduct: CREATE_PRODUCT,
            updateProduct: UPDATE_PRODUCT,
            deleteProduct: DELETE_PRODUCT,
        }
    })
});

