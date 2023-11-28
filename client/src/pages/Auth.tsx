import { FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from '../helpers/localstorage.helper';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

export const Auth: FC = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.login({email, password})
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
      const data = await AuthService.registration({
        email,
        password,
      });
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
  return (
    <div className="mt-40 flex flex-col justify-center items-center bg-slate-900 text-white">
      <h1 className="text-center text-xl mb-10">
        {isLogIn ? 'Sign In' : 'Sign up'}
      </h1>
      <form
        className="flex w-1/3 flex-col mx-auto gap-5"
        onSubmit={isLogIn ? loginHandler : registrationHandler}
      >
        <input
          type="text"
          className="input"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-green mx-auto">Submit</button>
      </form>
    </div>
  );
}
