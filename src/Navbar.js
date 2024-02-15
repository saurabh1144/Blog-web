import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="navbar">
        <h3>Blogs</h3>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
        </div>

        </div>
    );
}
 
export default Navbar;
