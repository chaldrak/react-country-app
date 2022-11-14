import "./Sidebar.css";
import { BsSearch, BsFlagFill, BsClipboardData } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = ({handleInput}) => {
    return (
        <div className="text-lightgray bg-dark-light px-10 pt-10 pb-2 lg:p-10 lg:block sticky top-[30px] lg:fixed z-20 lg:inset-0 lg:top-[60px] lg:left-0 lg:border-r border-gray lg:w-[20rem] lg:shadow-none shadow-lg">
            <div className="bg-gray relative pointer-events-auto">
                <div type="button" className="w-full flex items-center text-sm leading-6 text-lightgray rounded-lg ring-1 ring-lightgray shadow-sm py-2 px-2">
                    <BsSearch className="text-xl mr-4" />
                    <input 
                        type="text" 
                        placeholder="Quick search..."
                        name=""
                        className="outline-none bg-transparent text-white"
                        onChange={(e) => handleInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="my-5 lg:my-10 bg-transparent">
                <ul className="lg:space-y-4 lg:block flex items-center justify-between">
                    <li>
                        <NavLink to="/countries" className="flex items-center group">
                            <div className="h-[25px] w-[25px] icon group-hover:bg-skyblue group-hover:text-white bg-gray mr-4 rounded-lg">
                                <BsFlagFill className="w-full h-full p-1 mr-4 block m-auto" />
                            </div>
                            <p className="group-hover:text-white">Countries</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className="flex items-center group">
                            <div className="h-[25px] w-[25px] icon group-hover:bg-skyblue group-hover:text-white bg-gray mr-4 rounded-lg">
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