const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const { sequelize } = require('./models');

const app = express();
const port = 3001;

app.use(express.json());

sequelize.sync().then(() => {
    console.log('Successfully connected to the database')
})

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true      //playground para vizualisar a aplicação
}));

app.listen(port, function () {
    console.log(`Connected server on port: ${port}`);
});
