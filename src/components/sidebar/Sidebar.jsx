import "./Sidebar.css";
import { BsSearch, BsFlagFill, BsClipboardData } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="text-lightgray p-10 hidden md:block fixed z-20 inset-0 top-[60px] left-0 border-r border-gray w-[20rem]">
            <div className="bg-gray relative pointer-events-auto">
                <div type="button" className="hidden w-full md:flex items-center text-sm leading-6 text-lightgray rounded-md ring-1 ring-lightgray shadow-sm py-2 px-2">
                    <BsSearch className="text-xl mr-4" />
                    <input 
                        type="text" 
                        placeholder="Quick search..."
                        name=""
                        className="outline-none bg-transparent text-white"
                    />
                </div>
            </div>
            <div className="my-10 bg-transparent">
                <ul className="space-y-4">
                    <li>
                        <NavLink to="/countries" className="flex items-center group">
                            <div className="h-[25px] w-[25px] group-hover:bg-skyblue group-hover:text-white bg-gray mr-4 rounded-md">
                                <BsFlagFill className="w-full h-full p-1 mr-4 block m-auto" />
                            </div>
                            <p className="group-hover:text-white">Countries</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className="flex items-center group">
                            <div className="h-[25px] w-[25px] group-hover:bg-skyblue group-hover:text-white bg-gray mr-4 rounded-md">
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