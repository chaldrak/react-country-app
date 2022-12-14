import { BsTwitter, BsLinkedin, BsFacebook, BsDiscord } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="text-center lg:text-left">
            <div className="mb-5 lg:flex lg:items-center lg:justify-between">
                <p>
                    Designed with 💞 by Chaldrak | Copyright © Nov 2022 | All rights reserved
                </p>
                <ul className="flex mt-4 lg:mt-0 justify-center space-x-4 lg:w-[100px] lg:items-center lg:justify-between">
                    <li>
                        <a href="https://twitter.com/chaldrakus" className="hover:text-white">
                            <BsTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/chaldrak-dokpa-a9b59621a/" className="hover:text-white">
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://web.facebook.com/chaldrak.charliecharmis" className="hover:text-white">
                            <BsFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.com/channels/@me/Chaldrak#2893" className="hover:text-white">
                            <BsDiscord />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;