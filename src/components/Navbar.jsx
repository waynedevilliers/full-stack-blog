import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full bg-gray-800 text-white py-4 px-6">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-3xl font-bold">
                    <NavLink to="/">My Blog</NavLink>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/createPost"
                            className={({ isActive }) =>
                                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
                            }
                        >
                            Create Post
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
