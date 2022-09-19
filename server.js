const app=require("./app")
require('dotenv').config()


const port=process.env.PORT || 5000;
//db connection
const conn=require('./db/conn')



//listen
app.listen(port,()=>{
    console.log(`server runing on port ${port}`)
})