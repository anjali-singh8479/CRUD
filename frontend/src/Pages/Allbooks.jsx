import React, { useEffect ,useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
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
  const handledelete=async(id)=>{
   
   try{
    await axios.delete("http://localhost:8800/deletebook/"+id)
    console.log(`Book deleted with id ${id}`);
    window.location.reload()
    
   }catch(err){
    console.log(err)
   }
  }
  return (
    <>
    <div className='Allbooks'>
    <h2>All Books</h2>
    <div className='books'>
      {books.map(book=>(
        <div className='book' id={book.id}>
       <div id='cover-image-div'>
       {book.cover && <img src={book.cover} className='cover-image' alt=""></img>}
       </div>
        <h4>{book.title}</h4>
         <div>{book.Desc}</div>
         <div>`$ {book.price}`</div>
        <button id="delete-book-button" className='addbook-button' onClick={()=>handledelete(book.id)}>Delete</button>
        <button id="update-book-button" className='addbook-button'> <Link to={`/update/${book.id}`}>update</Link></button>
         </div>
      ))}
    </div>
    <button className="addbook-button" onClick="addbook">Add Book</button>
    </div>
    </>
   
  )
}

export default Allbooks