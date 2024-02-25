import { Link } from 'react-router-dom';
import '../index.css'
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import Dropdown from './Dropdown';
const Header = () => {
    const [modal,setModal] = useState(false)
  
    return (
        <div className="max-md:fixed w-full z-50 items-center max-lg:h-[55px] bg-[#D24545] w-creen h-[75px]">
            <div className="container mx-auto h-full">
                <div className="flex items-center max-lg:h-[100%] h-[60%]">
                    <div className="flex pl-4 max-lg:hidden items-center absolute top-4">
                        
                        <a className="font-semibold  text-white text-2xl" href="/">BookReading</a>
                    </div>
                    <div className='pl-6 lg:hidden'>
                       <a href='/'>
                            <ImBooks className='' size={32} color='white'/>
                       </a>
                    </div>
                    
                    {/* <nav className='flex items-center w-full justify-center'>
                        <ul className="h-full text-white font-semibold text-[22px]">
                            <li className='mx-6 inline-block pb-3'>Home</li>
                            <li className='mx-6 inline-block pb-3'>About</li>
                            <li className='mx-6 inline-block pb-3'>Contact</li>
                        </ul>
                    </nav> */}
                    <div className='w-full flex justify-center'>
                        <div className='bg-white w-[40%] px-2 max-sm:w-[65%] max-md:w-[50%] max-md:py-[0px] py-[2px] border rounded-lg'>
                            <div className='flex items-center relative'>
                                <input className='w-full text-[#D24545] focus:outline-none font-semibold' type="text" />
                                <CiSearch className='cursor-pointer' size={25} color='#D24545'/>
                                <div className='absolute top-[30px] border border-[#d24545] bg-white text-[#1B3C73] font-semibold w-full rounded-b-md'>
                                
                                </div>
                                       
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden pr-3'>
                        <GiHamburgerMenu onClick={()=>setModal(true)} size={23} color='white'/>
                        {modal && <Dropdown setModal={setModal}/>}
                    </div>
                </div>
                <div className='max-lg:hidden w-full flex justify-center'>
                    <ul className=' flex px-4 text-white font-semibold'>
                        <Link to='/category' className='category-item'>Cars</Link>
                        <li className='category-item'>Phone</li>
                        <li className='category-item'>Fruits</li>
                        <li className='category-item'>History</li>
                        <li className='category-item'>Math</li>
                        <li className='category-item'>Chemistry</li>
                        <li className='category-item'>Biology</li>
                        <li className='category-item'>Physics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;