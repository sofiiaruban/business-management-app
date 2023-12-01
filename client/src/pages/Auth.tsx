import { ChangeEvent, FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from '../helpers/localstorage.helper';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { IUserData } from '../types/types';
import { ProfileInputs } from '../components/ProfileInputs';

export const Auth: FC = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);
  const [authData, setAuthData] = useState<IUserData>({
    email: '',
    password: '',
    phoneNumber: '',
    lastName: '',
    firstName: '',
    nickname: '',
    description: '',
    position: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setAuthData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(authData)
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.login({
        email: authData.email,
        password: authData.password,
      });
      if (data) {
        setTokenToLocalStorage('token', data.token)
        dispatch(login(data))
        toast.success("You logged in")
        navigate('/')
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.registration(authData);
      console.log(data)
      if (data) {
        toast.success('Account has been created');
        setIsLogIn(!isLogIn);
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  const toggleLoginHandler = () => {
    setIsLogIn(!isLogIn)
  }
  return (
    <div className="mt-10 flex flex-col justify-center items-center bg-slate-900 text-white">
      <div className="flex mb-4 gap-2">
        <button
          className={`${!isLogIn ? 'font-bold' : ''} "btn btn-grey"`}
          onClick={toggleLoginHandler}
        >
          Sign Up
        </button>
        <button
          className={`${isLogIn ? 'font-bold' : ''} "btn btn-grey"`}
          onClick={toggleLoginHandler}
        >
          Sign In
        </button>
      </div>
      <form
        className="flex w-1/3 flex-col mx-auto gap-5"
        onSubmit={isLogIn ? loginHandler : registrationHandler}
      >
        <input
          type="text"
          className="input"
          placeholder="Email"
          name="email"
          value={authData.email}
          onChange={changeHandler}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          name="password"
          value={authData.password}
          onChange={changeHandler}
          required
        />
        {!isLogIn && (
          <ProfileInputs authData={authData} changeHandler={changeHandler} />
        )}
        <button className="btn btn-green mx-auto">Submit</button>
      </form>
    </div>
  );
}