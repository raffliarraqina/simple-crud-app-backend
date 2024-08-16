const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});

// connect to database
mongoose.connect("mongodb+srv://raffliarraqina77:bDbQRtZrsKFaEtCm@backend.mtp3g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log("MongoDB Connected with database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection Failed...");
})