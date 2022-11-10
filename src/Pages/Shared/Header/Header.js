import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';
import { FaUser } from 'react-icons/fa';
import Blogs from '../../Blogs/Blogs';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>
  {
    logOut().then(() => {
  
    }).catch((error) => {
    
    });
    
  }

  
    const menuItems = <>
    <li className='font-semibold'> <Link to='/'>Home</Link> </li>
    {
      user?.email?
      <>
      <li className='font-semibold'> <Link to="/myreviews">MyReviews </Link> </li>
      <li className='font-semibold' onClick={handleLogOut}> <Link>LogOut </Link> </li>

      </>:
      <>
      <li className='font-semibold'> <Link to='/signup'>SignUp</Link> </li>
      <li className='font-semibold'> <Link to='/login'>Login</Link> </li>
      </>
    }
    
    </>

    return (
        <div className="navbar bg-base-100 mb-6 pt-6 h-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
              <li className='font-semibold'> <Link to="/blogs">Blogs </Link> </li>
              
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl">
              {/* <img src={logo} alt=""/> */}
              Travel-Zone
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuItems}
          <li className='font-semibold'> <Link to="/blogs">Blogs </Link> </li>
          
          </ul>
        </div>
        <div className="navbar-end">
        <>
                                {
                                    user?.uid &&
                                            <span>{user?.displayName}</span>

                                }
                                 {
                                    user?.photoURL ?
                                        
                                    <div className="avatar">
                                    <div className="w-12 mx-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                      <img src={user?.photoURL} alt=""/>
                                    </div>
                                  </div>
                                        :
                                        <FaUser></FaUser>
                                }
                            </>
        </div>
      </div>
    );
};

export default Header;