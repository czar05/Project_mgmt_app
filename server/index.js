const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema');
const db = require('./config/mongoose');
const port = process.env.PORT || 5000;
const app = express();


app.use(cors());

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server is running on ${port}`));