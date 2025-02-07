"use client";
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white p-4 shadow-lg px-6 py-8">
      <div className="text-3xl font-bold font-serif">
        <Link href="/" className="hover:text-gray-200 transition duration-200 title-font text-2xl leading-tight">
          Programming Languages Blog
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link
          href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
          target="_blank"
          className="hover:text-blue-700 transition duration-200"
        >
          <FaLinkedin size={22} />
        </Link>
        <Link
          href="https://github.com/khanzadigithubid"
          target="_blank"
          className="hover:text-gray-500 transition duration-200"
        >
          <FaGithub size={22} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
