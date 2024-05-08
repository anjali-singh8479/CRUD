import React, { useEffect ,useState} from 'react'
import axios from "axios"
const Allbooks = () => {
  const [books,setbooks]=useState([]);
  useEffect(()=>{
    const fetchallbooks=async()=>{
      try{
      const res=await axios.get("http://localhost:8800/allbooks");
      setbooks(res.data);
      console.log(res);
      }catch(err){
        console.log(err);
      }
    }
    fetchallbooks()
  },[])
  // const addbook()=>{
    
  // }
  return (
    <>
    <h4>All Books</h4>
    <div className='books'>
      {books.map(book=>(
        <div className='book' id={book.id}>
        {book.cover && <img src={book.cover} alt=""></img>}
        <h4>{book.title}</h4>
         <div>{book.Desc}</div>
         <div>{book.price}</div>
        
         </div>
      ))}
    </div>
    <button onClick="addbook">Add Book</button>
    </>
   
  )
}

export default Allbooks