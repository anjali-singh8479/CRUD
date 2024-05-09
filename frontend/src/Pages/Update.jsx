import React ,{ useEffect, useState }from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
const Update = () => {
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
  
  const location=useLocation()
  const bookid=location.pathname.split("/").at(2);
   console.log(bookid)
   const navigate=useNavigate()
  
  useEffect(()=>{
    const getinitial=async()=>{
      const initialdata= axios.get("http://localhost:8800/getbook/"+bookid);
    console.log("initialdata");
   const bookdata=(await initialdata).data[0];
   setbook({title:bookdata.title,
   desc:bookdata.Desc,
   cover:bookdata.cover,
   price:bookdata.price})
    }
    getinitial()
  },[])
    const updatebook=async(e)=>{
      e.preventDefault()
      try{
       
     const res=await axios.put("http://localhost:8800/updatebook/"+ bookid,book);
      navigate("/allbooks");
      console.log(res);
      }catch(err){
        console.log(err)
      }
    }
    
  return (
    <>
    <form>
    <h2>update a Book</h2>
    <div className="label-div">
    <label>Desc</label>
    <input type='text' name="desc" placeholder='Enter the desc' onChange={handlechange}value={book.desc}></input>
    </div>
    <div className="label-div">
    <label>title</label>
    <input type='text' name="title" placeholder='Enter the title' onChange={handlechange} value={book.title}></input>
    </div>
    <div className="label-div">
    <label>cover</label>
    <input type='text' name="cover" placeholder='Enter the url of image' onChange={handlechange} value={book.cover}></input>
    </div>
    <div className="label-div">
    <label>price</label>
    <input type='number' name='price' placeholder='Enter the price'onChange={handlechange} value={book.price}></input>
    </div>
    <button className='addbook-button' onClick={updatebook}>update</button>
    </form>
    </>
  )
}

export default Update