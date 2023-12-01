import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineBank } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { logout, selectUserId } from '../store/user/userSlice'
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export const Header: FC = () => {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const profileId = useSelector(selectUserId);

  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    toast.success('You logged out')
  }

  return (
    <header className='flex items-center text-xl justify-between bg-slate-800 px-6 py-3 shadow-sm backdrop-blur-sm'>
      <Link to='/companies'>
        <AiOutlineBank size={25} />
      </Link>
      {isAuth && (
        <ul className='flex items-center gap-5 ml-auto mr-10'>
          <li>
            <NavLink
              to={'/companies'}
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-white/50'
              }
            >
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/user/${profileId}`}
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-white/50'
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      )}
      {isAuth ? (
        <button className='btn btn-red' onClick={logoutHandler}>
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link className='py-2 text-white/50 hover: text-white' to={'auth'}>
          Auth
        </Link>
      )}
    </header>
  );
}
