import { ThemeSwitch } from "./theme-switch";
import { SiteConfig } from "@/config/site";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import { LogoBig } from '@/components/icons';

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col py-10 px-4 mt-10">
      <div className="top-footer w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center pb-8 border-b-2 border-black dark:border-white">
        <div className="mb-6 md:mb-0">
          <LogoBig className="text-3xl w-20 md:w-24 lg:w-28 xl:w-32" />
        </div>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 uppercase text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              À propos
            </a>
          </li>
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              Rendez-vous
            </a>
          </li>
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              Gallerie
            </a>
          </li>
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="social flex justify-center gap-6 mt-6 md:mt-0 text-2xl lg:text-3xl">
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out">
            <FaFacebook
                
            />
          </a>
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>

      <div className="bottom-footer m-auto flex flex-col md:flex-row items-center justify-center md:justify-between mt-6 text-center text-sm sm:text-base md:text-lg">
        <ul className="flex flex-wrap justify-center gap-4 mt-6 md:mt-0 text-gray-700 dark:text-gray-300">
          <li>
            © 2024 Your Beauty Studio. All rights reserved.
          </li>
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a 
              href="https://jb-esthetic.vercel.app" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              Cookies Settings
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
