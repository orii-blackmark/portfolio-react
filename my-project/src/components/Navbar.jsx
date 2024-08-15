import logo from "../assets/KevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 " src={logo} alt="logo" />
      </div>
      <div className="m-4 flex items-center justify-center gap-6 text-1xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
