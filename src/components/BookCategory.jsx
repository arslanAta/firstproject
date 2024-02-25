import BookItem from "./BookItem";
import books from "../data";

const BookCategory = () =>{
    return(
        <div className="px-1">
            <h1 className="inline-block text-2xl p-2 font-semibold text-[#D24545]">
                History books
            </h1>
            <div className="">
                <ul className="flex text-[#D24545]">
                    <li className="filter-item">
                        New
                    </li>
                    <li className="filter-item">
                        Old
                    </li>
                    <li className="filter-item">
                        Best
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap ">
                {books.map(book=>{
                    return(
                        <BookItem book={book}/>
                    )
                })}
            </div>
        </div>
    )
}
export default BookCategory;