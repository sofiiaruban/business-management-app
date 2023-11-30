import { FC } from 'react';
import { instance } from '../api/axios.api';
import { ICompany } from '../types/types';
import { Params, useLoaderData } from 'react-router-dom';

export const companyDetailedLoader = async ({ params }: { params: Params }) => {
  const { data } = await instance.get<ICompany[]>(`companies/${params.id}`);
  return data;
};

export const CompanyDetail: FC = () => {
  const company = useLoaderData() as ICompany;
  console.log(company);

  return (
    <>
      {company && (
        <div className="flex flex-col mx-auto items-center justify-center mt-10">
          <h2 className="text-2xl mb-10 uppercase">{company.name}</h2>
          <table className="flex flex-col gap-2 w-1/3">
            <tr className="p-2 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
              <td className="font-semibold">Id:</td>
              <td>{company.id}</td>
            </tr>
            <tr className="p-2 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
              <td className="font-semibold">Address:</td>
              <td>{company.address}</td>
            </tr>
            <tr className="p-2 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
              <td className="font-semibold">Service of activity:</td>
              <td>{company.service}</td>
            </tr>
            <tr className="py-2 px-3 rounded-lg bg-blue-600 mb-2 hover:bg-blue-400">
              <td className="font-semibold">Number of employees:</td>
              <td>{company.employeeNumber}</td>
            </tr>
          </table>
        </div>
      )}
    </>
  );
};
