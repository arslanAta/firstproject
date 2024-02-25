import BookItem from "./BookItem.jsx";
import books from "../data";
import { useState } from "react";

const BookList = () =>{
    const [bookList,setBookList] = useState(books)
    return(
        <div className="px-1">
            <h1 className="inline-block text-2xl p-2 font-semibold text-[#D24545]">
                New items
            </h1>
            <div className="">
                <ul className="flex text-[#D24545]">
                    <li onClick={()=>setBookList(books)} className="filter-item">
                        All
                    </li>
                    <li onClick={()=>setBookList(books.filter(book=>book.status === 'new'))} className="filter-item">
                        New
                    </li>
                    <li onClick={()=>setBookList(books.filter(book=>book.status === 'best'))}className="filter-item">
                        Best
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap max-sm:justify-around">
                {bookList.map((book,index)=>{
                    return(
                        <BookItem key={index} book={book}/>
                    )
                })}
            </div>
        </div>
    )
}
export default BookList;