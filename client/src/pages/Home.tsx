import { FC } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import { Form } from 'react-router-dom';
import { FaPlus} from 'react-icons/fa';
import { CompanyModal } from '../components/CompanyModal';

export const companyAction = async ({ request}) {
  switch(request.method){
    case "POST": {
      const formData = await request.formData()
      const company  = 
    }
    case "PATCH": {}
    case "DELETE": {}
  }
}
export const Home: FC = () => {
  return (
    <div className="mt-10 rounded-md bg-slate-800 p-4">
      <h1>Your Companies List</h1>
      <div className="mt-2 flex flew-wrap items-center gap-2">
        <div className="group relative flex py-2 items-center px-4 rounded-lg bg-blue-600 gap-2">
          Sample
          <div className="absolute hidden px-3 left-0 top-0 bottom-0 right-0 rounded-lg items-center bg-black/90 justify-between group-hover:flex">
            <button>
              <AiFillEdit />
            </button>
            <Form className="flex" method="delete" action="/companies">
              <input type="hidden" value={'Company id'} />
              <button type="submit">
                <AiFillCloseCircle />
              </button>
            </Form>
          </div>
        </div>
      </div>
      <button className="max-w-fit flex items-center gap-2 text-white/50 hover: text-white">
        <FaPlus />
        <span>Create a new company</span>
      </button>
    <CompanyModal type={'post'} id={0} setVisibleModal={function (visible: boolean): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>
  );
}
