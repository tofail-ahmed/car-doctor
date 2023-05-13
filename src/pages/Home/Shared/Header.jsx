import { Link } from 'react-router-dom';
import logo from '../../../assets/assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
      const { user, logOut } = useContext(AuthContext)

      const handleLogOut=()=>{
            logOut()
            .then(()=>{})
            .catch(e=>console.log(e))
      }
      const navItems = <>

            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            {
                  user?.email ? <>
                  <li><button onClick={handleLogOut}>Logout</button></li>
                  <li><Link to={'/bookings'}>Bookings</Link></li>
                  <li><p className='text-red-600 font-bold'>{user.email.slice(0,3)}</p></li>
                  </>
                        : <li><Link to={'/login'}>Login</Link></li>
            }
      </>
      return (
            <div style={{ height: "100px", backgroundColor: "floralwhite" }} className="navbar bg-base-100">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {navItems}
                              </ul>
                        </div>
                        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                              <img style={{ height: '50px' }} src={logo} alt="" />

                        </Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {navItems}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <button className="btn btn-outline btn-secondary">Appointment</button>
                  </div>
            </div>
      );
};

export default Header;