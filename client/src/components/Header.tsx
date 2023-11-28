import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineBank } from 'react-icons/ai';
import { FaSignOutAlt } from "react-icons/fa";

export const Header: FC = () => {
  const isAuth = false
  return (
    <header className="flex items-center justify-between bg-slate-800 px-4 py-2 shadow-sm backdrop-blur-sm">
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
        <button className="btn btn-red">
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link className="py-2 text-white/50 hover: text-white" to={'auth'}>
          Log In/Sign In
        </Link>
      )}
    </header>
  );
}
