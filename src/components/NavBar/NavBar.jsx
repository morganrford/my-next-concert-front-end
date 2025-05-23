import { Link } from 'react-router'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/concerts/new'>New Concert</Link></li>
                <li><Link to='/bands/new'>New Band</Link></li>
                <li><Link to='/concerts'>Your Concerts</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;