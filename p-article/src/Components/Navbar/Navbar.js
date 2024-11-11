import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar =()=>{
    return(
        <div className='nav'>
            <Link>
            <img src="../../images/logo.jpg" alt="Photo of the Logo" className='logo'/>
            </Link>
            <ul className='navbar'>
                <li className='navbar-items'><Link to="/">Home</Link></li>
                <li className='navbar-items'><Link to="/testimonials">Testimonials</Link></li>
                <li className='navbar-items'><Link to="/projects">Projects</Link></li>
                <li className='navbar-items'><Link to="/diary">Diary</Link></li>
                <li className='navbar-items'><Link to="/contact">Contact</Link></li>
            </ul>

        </div>
    )
}
export default Navbar;