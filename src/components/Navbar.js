import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="lg:flex justify-center bg-indigo-200 px-8 py-8 border-b-2 border-blue-400">
            

            <ul className="flex">
                <li className="mr-20 text-gray-400 hover:text-indigo-400">
                    <Link className="/" to="/">About</Link>
                </li>
            
                <li className="mr-20 text-gray-400 hover:text-indigo-400">
                <Link className="contact" to="/Contact">Contact</Link>
                </li>
               
                <li className="mr-20 text-gray-400 hover:text-indigo-400">
                <Link className="todolist" to="/Todolist">To do List</Link>
                </li>

            </ul>
            
        </div>
    )
}

export default Navbar
