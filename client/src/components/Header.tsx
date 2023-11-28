import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineBank } from 'react-icons/ai';
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../store/user/userSlice';
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper';
import { toast } from 'react-toastify';

export const Header: FC = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    toast.success('You logged out')
  }

  return (
    <header className="flex items-center justify-between bg-slate-800 px-4 py-3 shadow-sm backdrop-blur-sm">
      <Link to="/">
        <AiOutlineBank size={25} />
      </Link>
      {isAuth && (
        <ul className="flex items-center gap-5 ml-auto mr-10">
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-white/50'
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      )}
      {isAuth ? (
        <button className="btn btn-red" onClick={logoutHandler}>
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link className="py-2 text-white/50 hover: text-white" to={'auth'}>
          Log In/Sign Un
        </Link>
      )}
    </header>
  );
}
