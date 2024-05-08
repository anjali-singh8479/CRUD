import express from "express";
import mysql from "mysql2"
const app=express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Aa05102001@",
    database:"nodejs",
})
app.use(express.json());
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
    }
})
})
app.post("/books",(req,res)=>{
const q="INSERT INTO books (`Desc`,`title`,`cover`) VALUES (?)";
const values=[req.body.desc,req.body.title,req.body.cover]
db.query(q,[values],(err,data)=>{
    if(err){
       return res.json(err)
    }
    return res.json("Books created successfully");
})
})
app.listen(8800,()=>{
    console.log("backend connected");
})