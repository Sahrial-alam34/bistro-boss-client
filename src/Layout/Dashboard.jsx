import { Link, Outlet } from "react-router-dom";

import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { FiMenu} from 'react-icons/fi';
const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><Link><FaHome></FaHome>User Home</Link></li>
                    <li><Link><FaCalendarAlt></FaCalendarAlt>Reservation</Link></li>
                    <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                    <li><Link><FaShoppingCart></FaShoppingCart>My Cart</Link></li>

                    <div className="divider"></div>
                    <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/menu'><FiMenu></FiMenu> Menu</Link></li>
                    {/* <li><Link to='/'><AiFillShopping></AiFillShopping>Shop</Link></li>
                    <li><Link to='/'><AiFillContacts></AiFillContacts>Contact</Link></li> */}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;