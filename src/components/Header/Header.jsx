import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    // console.log('btn click');
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        { user &&
          <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
        }
        { user &&
          <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
        }
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        {
          user ? 
          <div>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-active capitalize">Sign out</button>
          </div> :
          <div>
            <Link to='/login'>
             <button className="btn btn-outline btn-secondary capitalize">Login</button>
            </Link>
          </div> 
        }
      </div>
    </div>
  );
};

export default Header;