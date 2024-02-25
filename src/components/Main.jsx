import CategoryList from "./CategoryList";

const Main = props =>{
    return(
        <div className="">
            <div className="container m-auto max-md:pt-[60px] pb-2">
                {/* <CategoryList/> */}
                {props.children}
            </div>
        </div>
    )
}
export default Main;
