import {Link} from 'react-router-dom';


const Header = () => (
    <div>
        <div className ='menu_h1'>
            <h2>
                201620904 Project
            </h2>
        </div>
        <div className="menu">
            <li>
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link>
            </li>
            <li>
                <Link to="/sneaker/calendar" style={{textDecoration: 'none', color: 'white'}}>Calendar</Link>
            </li>
            <li>
                <Link to="/sneaker/new" style={{textDecoration: 'none', color: 'white'}}>New Sneaker</Link>
            </li>
        </div>
    </div>

)
export default Header