const mongoose=require('mongoose')
const DB_URL=process.env.DBURL;
const conn=mongoose.connect(DB_URL,{
    
}).then(()=>{
    console.log("database connected!!!")
}).catch((e)=>{
    console,log(e.message)
})

module.exports=conn;