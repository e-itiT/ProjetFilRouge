// let dotenv = require("dotenv-flow");
// dotenv.config();
require("dotenv-flow").config();

// console.log(process.env);
const { MESSAGE, NODE_ENV, PORT} = process.env
console.log('Lancé en ', NODE_ENV, ' : ', MESSAGE);

const express = require('express');

const router = require('./routes');

const app = express();

// app.get('/user',(req,res)=>{
//     const data = {
//         msg :'Coucou'
//     }
//     res.json(data);
// })

app.use('/api',router);

app.listen(PORT, ()=>{
    console.log(`Server up on port: ${PORT} [${NODE_ENV}]`);
})

