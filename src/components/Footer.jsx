const Footer = () =>{
    return(
        <div className="bg-[#3C3633]">
            <div className="container m-auto p-2 max-md:p-0">
                <div className="flex ">
                    <ul className="px-6 max-lg:py-2  py-5  max-md:text-[15px] text-xl text-white">
                        <li className="my-1">
                            About
                        </li>
                        <li className="my-1">
                            Contact
                        </li>
                        <li className="my-1">
                            Help
                        </li>
                    </ul>
                    <ul className="px-6 max-lg:py-2 py-5 max-md:text-[15px] text-xl text-white">
                        <li className="my-1">
                            Download
                        </li>
                        <li className="my-1">
                            More
                        </li>
                        <li className="my-1">
                            Support
                        </li>
                    </ul>
                </div>
                <div>
                    <center>
                        <a className="max-md:text-[15px] text-xl text-white font-semibold inline-block max-lg:pb-2 py-2" href="">Copyright-2024</a>
                    </center>
                </div>
            </div>
        </div>
    )
}
export default Footer;