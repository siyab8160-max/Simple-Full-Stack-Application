const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const products = require('./data')


app.use(cors());
app.use(bodyParser.json());

app.get('/api/products',(req,res)=>{
    res.send(products);
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})