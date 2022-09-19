const express= require("express")
const app=express();
const CustomerRouter=require('./routes/customerRoutes')
require('dotenv').config()




//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/v1',CustomerRouter);




module.exports=app;