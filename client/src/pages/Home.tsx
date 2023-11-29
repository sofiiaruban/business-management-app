import { FC, useState } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import { Form } from 'react-router-dom';
import { FaPlus} from 'react-icons/fa';
import { CompanyModal } from '../components/CompanyModal';
import { instance } from '../api/axios.api';

export const companyAction = async ({ request}: any) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData()
      const company = {
        name: formData.get('name'),
        foundedAt: Number(formData.get('foundedAt')),
        service: formData.get('service'),
        headquarter: formData.get('headquarter'),
      };
      console.log(company)
      await instance.post('/companies', company)
      return null
    }
    case "PATCH": {
      return null
    }
    case "DELETE": { 
      return null
    }
  }
}
export const Home: FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
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
      <button
        onClick={() => setVisibleModal(true)}
        className="max-w-fit flex items-center gap-2 text-white/50 hover: text-white"
      >
        <FaPlus />
        <span>Create a new company</span>
      </button>
      {visibleModal && (
        <CompanyModal type={'post'} setVisibleModal={setVisibleModal} />
      )}
    </div>
  );
}
