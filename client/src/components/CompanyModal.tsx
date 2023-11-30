import { FC } from "react"
import { Form } from "react-router-dom";

interface ICompanyModal {
  type: 'post' | 'patch';
  id?: number;
  setVisibleModal: (visible: boolean) => void
}
export const CompanyModal: FC<ICompanyModal> = ({type, id, setVisibleModal}) => {
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
            placeholder="Company title"
            required
          />
          <input type="hidden" name="id" value={id} />
        </label>
        <label htmlFor="service">
          <small>Service of activity</small>
          <input
            className="input w-full"
            type="text"
            name="service"
            placeholder="Service of activity"
            required
          />
        </label>
        <label htmlFor="headquarter">
          <small>Address</small>
          <input
            className="input w-full"
            type="text"
            name="headquarter"
            placeholder="Address"
            required
          />
        </label>
        <label htmlFor="foundedAt">
          <small>Number of employees</small>
          <input
            className="input w-full"
            type="text"
            name="foundedAt"
            placeholder="Number of employees"
            required
          />
        </label>
        <div className="flex items-center gap-2">
          <button className="btn btn-green" type="submit">
            {type === 'patch' ? 'Save' : 'Create'}
          </button>
          <button
            onClick={() => setVisibleModal(false)}
            className="btn btn-red"
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};
