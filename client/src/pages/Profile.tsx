import { ChangeEvent, FC, useState } from 'react'
import { instance } from '../api/axios.api';
import { IUser, IUserData } from '../types/types';
import { Link, Params, useLoaderData, useNavigate } from 'react-router-dom';
import { ProfileInputs } from '../components/ProfileInputs';
import { useSelector } from 'react-redux';
import { selectUserId } from '../store/user/userSlice';
import { toast } from 'react-toastify';

export const profileLoader = async ({ params }: { params: Params }) => {
  const { data } = await instance.get<IUser[]>(`/user/${params.id}`);
  return data;
};

export const Profile:FC = () => {
  const profile = useLoaderData() as IUserData;
  const profileId = useSelector(selectUserId);
  const [profileData, setProfileData] = useState<IUserData>({
    phoneNumber: profile.phoneNumber || '',
    lastName: profile.lastName || '',
    firstName: profile.firstName || '',
    nickname: profile.nickname || '',
    description: profile.description || '',
    position: profile.position || '',
  });
  const navigate = useNavigate()

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault(); 
      const data = await instance.patch(`/user/${profileId}`, profileData);
      if(data) {
        toast.success('You update information');
        navigate('/companies');
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  return (
    <div className="mt-10 flex w-1/3 flex-col mx-auto justify-center gap-1">
      <h1 className="text-xl font-semibold mb-4 text-center">
        Profile Information
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col justify-center ">
        <ProfileInputs authData={profileData} changeHandler={changeHandler} />
        <div className="flex gap-2 mt-2">
          <button type="submit" className="btn btn-green basis-2/4 ">
            Save
          </button>
          <button type="button" className="btn btn-grey basis-2/4">
            <Link to="/companies">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
