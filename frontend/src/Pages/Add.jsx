import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
  const [book,setbook]=useState({
    title:"",
    desc:"",
    cover:"",
    price:""
  })
  const handlechange=(e)=>{
    setbook((prev)=>({...prev, [e.target.name]:e.target.value}));
    console.log(book)
  } 
  
    
    const addbook=async(e)=>{
      e.preventDefault()
      try{
     const res=await axios.post("http://localhost:8800/addbook",book)
      console.log("Book added");
      console.log(res);
      }catch(err){
        console.log(err)
      }
    }
    

  return (
    <>
    <form>
    <h2>Add a Book</h2>
    <input type='text' name="desc" placeholder='Enter the desc' onChange={handlechange}></input>
    <input type='text' name="title" placeholder='Enter the title' onChange={handlechange}></input>
    <input type='text' name="cover" placeholder='Enter the url of image' onChange={handlechange}></input>
    <input type='number' name='price' placeholder='Enter the price'onChange={handlechange}></input>
    <button className='addbook-button' onClick={addbook}>Add</button>
    </form>
    </>
  )
}

export default Add