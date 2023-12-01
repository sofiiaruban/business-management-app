import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import { PiProhibitBold } from 'react-icons/pi';

interface Props {
  children: JSX.Element
}
export const ProtectedRoute: FC<Props>= ({children}) => {
  const isAuth = useAuth()
  return (
    <>
      {isAuth ? (
        children
      ) : (
        <div className='flex flex-col items-center justify-center gap-10'>
          <h1 className='text-2xl'>You must be logged in</h1>
          <PiProhibitBold />
        </div>
      )}
    </>
  );
}
 