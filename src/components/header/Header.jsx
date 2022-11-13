import { BsGithub, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
    return (
        <nav className="border-b block items-center border-gray text-white">
            <div className="px-10 py-4 mx-auto flex justify-between items-center">
                <h2 className="text-4xl">World Countries Data</h2>
                <ul className="flex justify-between w-24 text-xl">
                    <li>
                        <BsFillMoonStarsFill className="moon" />
                    </li>
                    <li>
                        <BsSunFill className="sun" /> 
                    </li>
                    <li>
                        <a href="">
                            <BsGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;