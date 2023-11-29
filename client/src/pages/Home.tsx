import { FC } from 'react'
import { AiFillEdit } from 'react-icons/ai';

export const Home: FC = () => {
  return (
    <div>
      <h1>Your Сompanies List</h1>
      <div className='mt-2 flex flew-wrap items-center gap-2'>
        <div className="group p-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2">
          <div className="absolute px-3 left-0 top-0 bottom-0 right-0 rounded-lg items-center justify-between">
              <button><AiFillEdit/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
