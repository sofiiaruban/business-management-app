import  { FC } from 'react'
import { Link } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb';

export const ErrorPage: FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center flex-col gap-10">
      <TbError404 size={100} />
      <h1 className="text-2xl">Page not found </h1>
      <Link
        to={'/companies'}
        className="bg-sky-500 text-lg hover:bg-sky-600 rounded-md px-6 py-2 font-semibold"
      >
        Back
      </Link>
    </div>
  );
}
