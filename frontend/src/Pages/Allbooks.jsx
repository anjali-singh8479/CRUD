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
        <button id="delete-book-button" className='addbook-button'>Delete</button>
        <button id="update-book-button" className='addbook-button'> Update</button>
         </div>
      ))}
    </div>
    <button className="addbook-button" onClick="addbook">Add Book</button>
    </div>
    </>
   
  )
}

export default Allbooks