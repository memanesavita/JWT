const express=require("express")
const app=express()
const jwt = require("jsonwebtoken");
const createToken=async()=>{
  const token=await jwt.sign({_id:"5fb86aaf8bcd21"},"mynameissavitapopatmemane")
  console.log(token)

const userVar=await jwt.verify(token,"mynameissavitapopatmemane")
console.log(userVar);

}
createToken();


app.listeners(5000,()=>{
  console.log(`server is runing at port no ${port}`)
})

