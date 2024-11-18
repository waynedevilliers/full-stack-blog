import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Link to="/">Home</Link>
            <NavLink to="/createpost">Create Post</NavLink>
            <NavLink to="/postdetails">Post Details</NavLink> 
        </div>
    )
}

export default Navbar