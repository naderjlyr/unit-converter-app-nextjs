import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center text-white">
      <div className="container mx-auto">
        Developed by
        <Link
          href="https://github.com/naderjlyr"
          className="hover:text-gray-300"
        >
          Naderjlyr
        </Link>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <a
            href="https://github.com/naderjlyr"
            className="hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://stackoverflow.com/users/5389109/naderjlyr"
            className="hover:text-gray-300"
          >
            <FaStackOverflow size={24} />
          </a>
          <a
            href="https://linkedin.com/in/nader-jalayeri"
            className="hover:text-gray-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
