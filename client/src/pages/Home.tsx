import { FC, useState } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { FaPlus} from 'react-icons/fa';
import { CompanyModal } from '../components/CompanyModal';
import { instance } from '../api/axios.api';
import { ICompany } from '../types/types';

export const companyAction = async ({request}: any) => {
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
      const formData = await request.formData();
      const company = {
        id: formData.get('id'),
        name: formData.get('name'),
        foundedAt: Number(formData.get('foundedAt')),
        service: formData.get('service'),
        headquarter: formData.get('headquarter'),
      };
      await instance.patch(`/companies/${company.id}`, company)
      return null
    }
    case "DELETE": { 
      const formData = await request.formData();
      const companyId = formData.get("id");
      await instance.delete(`/companies/${companyId}`);
      return null
    }
  }
}
export const companyLoader = async () => {
  const { data } = await instance.get<ICompany[]>('/companies');
  return data
}
export const Home: FC = () => {
  const companies = useLoaderData() as ICompany[];
  const [companyId, setCompanyId] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  console.log(companies);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  return (
    <div className="mt-10 rounded-md bg-slate-800 p-4">
      <h1>Your Companies List</h1>
      <div className="mt-2 flex-col items-center">
        <table className="w-full">
          <thead>
            <tr className="flex items-center py-2 px-4 gap-4">
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Service</th>
              <th>Number of employees</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company: ICompany, index: number) => (
              
                <tr
                  key={index}
                  className="group relative flex py-2 items-center px-4 rounded-lg bg-blue-600 gap-3 mb-2"
                >
                  <Link to={`/companies/${company.id}`}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.service}</td>
                  <td className="absolute hidden px-3 left-0 top-0 bottom-0 right-0 rounded-lg items-center bg-black/90 justify-end gap-3 group-hover:flex">
                    <button
                      onClick={() => {
                        setCompanyId(company.id);
                        setVisibleModal(true);
                        setIsEdit(true);
                      }}
                    >
                      <AiFillEdit />
                    </button>
                    <Form className="flex" method="delete" action="/companies">
                      <input type="hidden" value={company.id} name="id" />
                      <button type="submit">
                        <AiFillCloseCircle />
                      </button>
                    </Form>
                  </td>
                  </Link>
                </tr>
            ))}
          </tbody>
        </table>
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
      {visibleModal && isEdit && (
        <CompanyModal
          type={'patch'}
          id={companyId}
          setVisibleModal={setVisibleModal}
        />
      )}
    </div>
  );
}
