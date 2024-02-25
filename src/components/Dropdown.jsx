import { Link } from "react-router-dom";

const Dropdown = props =>{
    const categoryList = [{name:'Phone'},{name:'Fruits'},{name:'History'},{name:'Math'},{name:'Chemistry'},{name:'Biology'},{name:'Physics'}]
    return(
        <div onClick={()=>props.setModal(false)} className="fixed left-0 top-0 dropdown w-full h-full">
            <div className="flex flex-col pt-10 pl-5 w-[60%] bg-white h-full">
                <Link to='/'>
                    <h1 className="text-2xl font-bold text-sky-600">Home</h1>
                </Link>
                {categoryList.map(category=>{
                    return <Link to='/category' onClick={()=>props.setModal(false)} className='text-2xl py-1  text-[#d24545]'>{category.name}</Link>
                })}
            </div>
        </div>
    )
}
export default Dropdown;