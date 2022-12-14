import { useState } from "react";
import { BsGithub, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
    const [theme, setTheme] = useState("dark");

    return (
        <nav className="bg-dark-light border-b block items-center border-gray sticky top-0 z-40">
            <div className="px-5 md:px-10 py-3 mx-auto flex justify-between items-center">
                <h2 className="text-xl md:text-3xl text-skyblue">World Countries Data</h2>
                <ul className="flex justify-between items-center w-24 text-xl text-lightgray">
                    {
                        theme === "dark" ?
                        <li 
                            className="text-center" 
                            title="Switch to light mode"
                            onClick={() => setTheme("light")}
                        >
                            <BsFillMoonStarsFill className="moon" />
                        </li> :
                        <li 
                            className="text-center"
                            title="Switch to dark mode"
                            onClick={() => setTheme("dark")}
                        >
                            <BsSunFill className="sun" /> 
                        </li>
                    }
                    <li className="px-4">|</li>
                    <li>
                        <a href="https://github.com/chaldrak" className="hover:text-white">
                            <BsGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;