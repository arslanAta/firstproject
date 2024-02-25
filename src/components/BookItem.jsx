import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const BookItem = props =>{
    return(
            <Link to={`/books/${props.book.id}`} className="overflow-hidden max-sm:basis-[47%] sm:basis-[33.3%] md:basis-[25%] lg:basis-[20%] xl:basis-[16.4%] xl:h-[290px]  h-[250px] p-1 cursor-pointer">
                <div className="h-full max-md:shadow-md shadow-2xl">
                    <div className="w-full flex justify-center h-[80%] max-md:h-[78%] overflow-hidden p-1">
                        <img className="w-full" src={`../${props.book.img}`} alt="" />
                    </div>
                    <div className="px-2 max-md:px-[8px]">
                        <p className="max-w-fit max-md:text-[14px] text-nowrap overflow-hidden truncate text-ellipsis text-md">
                            {props.book.name}  
                        </p>
                        {/* <div className="text-sm text-gray-500">
                            <p className="truncate">{props.book.description}</p>
                        </div> */}
                        <div className="flex items-center">
                            <FaStar  color="yellow" className="mx-1 max-md:size-3"/>
                            <p className="max-md:text-[12px]">5</p>
                        </div>
                    </div>
                </div>
            </Link>
      
    )
}
export default BookItem;