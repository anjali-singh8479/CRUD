import express from "express";
import mysql from "mysql2"
const app=express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Aa05102001@",
    database:"nodejs",
})
app.get("/",(req,res)=>{
    res.json("Hello backend is connected");
})
app.get("/books",(req,res)=>{
const q="SELECT * FROM books"
db.query(q,(err,data)=>{
    if(err){
        return res.json(err);
    }
    else{
        return res.json(data);
        // console.log(data);
    }
})
})
app.listen(3000,()=>{
    console.log("backend connected");
})