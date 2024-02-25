import { FaBookOpen, FaStar } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import BookItem from "./BookItem";
import { Link, useParams } from "react-router-dom";
import books from "../data";

const BookDetails = () => {
    const params = useParams();
    const book = books.find(book=> book.id == params.id)
    return (
        <div className="">
            <div className="flex flex-wrap">
                <div className="basis-1/4 max-sm:p-2 p-4 max-lg:basis-[40%] max-md:basis-full">
                    <div className="flex items-center justify-center bg-slate-100 shadow-sm max-sm:h-full">
                        <div className="flex max-sm:h-[90%] justify-center items-center">
                            <img className=" lg:scale-[80%] max-sm:h-[85%] " src={`../${book.img}`} alt="Book Image" />
                        </div>
                    </div>
                </div>
                <div className="basis-2/4 max-lg:basis-[60%] max-md:basis-full max-md:px-[20px] pt-3">
                    <div className="">
                        <div className="p-1">
                            <div className="p-1 px-2 text-white font-semibold bg-sky-600 w-fit rounded-xl text-sm">
                                Recommended
                            </div>
                            <h1 className="text-[#D24545] max-sm:text-xl max-sm:pt-2  inline-block p-1 py-3 font-semibold text-2xl">
                                {book.name}
                            </h1>
                        </div>
                        <div>
                            <div className="flex items-center px-4">
                                <FaBookOpen />
                                <p className="mx-2">Text</p>
                            </div>
                        </div>
                        <div className="flex text-lg py-4 px-10 text-[#0C2D57] font-semibold">
                            <div className="flex items-center mx-1">
                                <FaStar size={20} color="yellow" />
                                <p className="px-2">5,0</p>
                            </div>
                            <div className="px-2 mx-1">
                                <center>
                                    <h1>190</h1>
                                    <p>reviews</p>
                                </center>
                            </div>
                            <div className="px-2  mx-1">
                                <center>
                                    <h1>2</h1>
                                    <p>quotes</p>
                                </center>
                            </div>
                        </div>
                        <div className="max-sm:py-1 p-2">
                            <h1 className="text-xl font-semibold text-[#D24545]">Author</h1>
                            <div className="flex items-center">
                                <IoPersonCircle size={50} color="grey" />
                                <p className="px-1">{book.author}</p>
                            </div>
                        </div>
                        <div className="max-sm:py-1 p-2">
                            <h1 className="text-xl font-semibold text-[#D24545] ">About book</h1>
                            <div className="">
                                <p className="leading-snug text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam sequi, quas laborum libero consectetur tempora facere quos labore quo numquam assumenda odio qui inventore mollitia expedita est voluptatem delectus dignissimos in laudantium optio veritatis? Magnam animi eius praesentium rerum.</p>
                            </div>
                            <div className="py-3">
                                <div className="flex ">
                                    <div className="font-semibold">
                                        <p>Pages written:</p>
                                    </div>
                                    <span className="mx-2">15 out of 380 </span>
                                </div>
                                <div className="flex ">
                                    <div className="font-semibold">
                                        <p>Last update:</p>
                                    </div>
                                    <span className="mx-2">February 16,2024 </span>
                                </div>
                            </div>
                            <div className=" max-sm:py-1 py-4">
                                <h1 className="text-xl text-[#D24545] font-semibold">Book decription</h1>
                                <div className="py-2">
                                    <p className="leading-snug text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, delectus eos quibusdam illum placeat iusto, officia enim itaque quae aliquam commodi nostrum perferendis unde! Natus, inventore. Ex cupiditate a maxime, nisi explicabo dignissimos? Commodi culpa repellat veritatis odio veniam labore debitis iure saepe id? Dicta, cupiditate nisi perferendis commodi odit enim iusto. Nulla amet explicabo non laudantium aliquam, deleniti ullam dolor ut repellat quisquam sed assumenda odit nostrum corrupti praesentium sequi aliquid maiores. Quibusdam voluptates eligendi et molestiae inventore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/4 flex justify-center max-lg:basis-full py-[10px]">
                    <div className="mx-auto w-full max-md:w-[80%]  max-lg:w-[60%] ">
                        <a href="../1.pdf" download="pdf_book.pdf">
                            <button className="rounded-xl my-2 w-full bg-sky-600 text-white font-semibold max-md:py-3 p-2">Download PDf</button>
                        </a>
                        <Link to='/viewer'>
                            <button className="rounded-xl my-2 w-full bg-[#FF9800] text-white font-semibold max-md:py-3 p-2">Read</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {/* <h1 className="inline-block px-2 text-xl font-semibold">Recommended for you</h1>
                <div className="flex px-2 overflow-scroll">
                    {books.map((book,index)=>{
                        return(
                            <BookItem book={book}/>
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
}
export default BookDetails;