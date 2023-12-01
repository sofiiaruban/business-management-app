import { FC, useEffect, useState } from "react"
import { Form } from "react-router-dom";
import { ICompany } from "../types/types";
import { instance } from "../api/axios.api";

interface ICompanyModal {
  type: 'post' | 'patch';
  id?: number;
  setVisibleModal: (visible: boolean) => void
}
export const CompanyModal: FC<ICompanyModal> = ({type, id, setVisibleModal}) => {
  const [companyData, setCompanyData] = useState<ICompany>({
    id: 0,
    name: '',
    service: '',
    address: '',
    employeeNumber: 0,
    description: '',
    companyType: ''
  });

  const getCompanyData = async () => {
    const { data } = await instance.get<ICompany>(`/companies/${id}`);
    setCompanyData(data)
    return null;
  }

  useEffect(() => {
    if (id) {
      getCompanyData();
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-full bg-black/50 flex justify-center items-center">
      <Form
        action="/companies"
        method={type}
        className="grid gap-2 w-[300px] p-5 rounded-b-md bg-slate-900"
        onSubmit={() => setVisibleModal(false)}
      >
        <label htmlFor="name">
          <small>Company title</small>
          <input
            className="input w-full"
            type="text"
            name="name"
            placeholder={companyData.name || 'Company title'}
          />
          <input type="hidden" name="id" value={id} />
        </label>
        <label htmlFor="service">
          <small>Service of activity</small>
          <input
            className="input w-full"
            type="text"
            name="service"
            placeholder={companyData.service || 'Service of activity'}
          />
        </label>
        <label htmlFor="address">
          <small>Address</small>
          <input
            className="input w-full"
            type="text"
            name="address"
            placeholder={companyData.address || 'Address'}
          />
        </label>
        <label htmlFor="employeeNumber">
          <small>Number of employees</small>
          <input
            className="input w-full"
            type="text"
            name="employeeNumber"
            placeholder={companyData.employeeNumber || 'Number of employees'}
          />
        </label>
        <label htmlFor="description">
          <small>Description</small>
          <input
            className="input w-full"
            type="text"
            name="description"
            placeholder={companyData.description || 'Description'}
          />
        </label>
        <label htmlFor="companyType">
          <small>Type</small>
          <input
            className="input w-full"
            type="text"
            name="companyType"
            placeholder={companyData.companyType || 'Type'}
          />
        </label>
        <div className="flex gap-2 mt-2">
          <button className="btn btn-green basis-2/4" type="submit">
            {type === 'patch' ? 'Save' : 'Create'}
          </button>
          <button
            onClick={() => setVisibleModal(false)}
            className="btn btn-red basis-2/4"
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};
