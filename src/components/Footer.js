import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>

            <footer className="bg-white shadow dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Moviepedia</Link>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="https://www.instagram.com/md_borno?igsh=MW45dTY1bWZqaWN0NQ==" target="_blank" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/adlul-islam/" target="_blank" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/md.borno.92/" target="_blank" className="mr-4 hover:underline md:mr-6">Facebook</a>
                        </li>
                        <li>
                            <a href="https://github.com/md-borno" target="_blank" className="hover:underline">GitHub</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </footer>
    );
};
