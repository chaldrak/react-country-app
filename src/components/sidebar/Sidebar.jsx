import "./Sidebar.css";
import { BsSearch, BsFlagFill, BsClipboardData } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="text-lightgray bg-dark-light px-10 pt-10 pb-2 md:p-10 md:block sticky top-[30px] md:fixed z-20 md:inset-0 md:top-[60px] md:left-0 md:border-r border-gray md:w-[20rem] md:shadow-none shadow-md">
            <div className="bg-gray relative pointer-events-auto">
                <div type="button" className="w-full flex items-center text-sm leading-6 text-lightgray rounded-md ring-1 ring-lightgray shadow-sm py-2 px-2">
                    <BsSearch className="text-xl mr-4" />
                    <input 
                        type="text" 
                        placeholder="Quick search..."
                        name=""
                        className="outline-none bg-transparent text-white"
                    />
                </div>
            </div>
            <div className="my-5 md:my-10 bg-transparent">
                <ul className="md:space-y-4 md:block flex items-center justify-between">
                    <li>
                        <NavLink to="/countries" className="flex items-center group">
                            <div className="h-[25px] w-[25px] icon group-hover:bg-skyblue group-hover:text-white bg-gray mr-4 rounded-md">
                                <BsFlagFill className="w-full h-full p-1 mr-4 block m-auto" />
                            </div>
                            <p className="group-hover:text-white">Countries</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className="flex items-center group">
                            <div className="h-[25px] w-[25px] icon group-hover:bg-skyblue group-hover:text-white bg-gray mr-4 rounded-md">
                                <BsClipboardData className="w-full h-full p-1 mr-4 block m-auto" />
                            </div>
                            <p className="group-hover:text-white">Stats</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;