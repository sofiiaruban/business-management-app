import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import { PiProhibitBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

interface Props {
  children?: JSX.Element
}
export const ProtectedRoute: FC<Props>= ({children}) => {
  const isAuth = useAuth()
  return (
    <>
      {isAuth ? (
        children
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center gap-10">
          <h1 className="text-3xl">You must be logged in</h1>
          <PiProhibitBold size={50}/>
          <Link to="/auth">
            <button className="btn btn-grey px-5 py-2">Go To Login</button>
          </Link>
        </div>
      )}
    </>
  );
}
 