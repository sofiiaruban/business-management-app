import { FC, useState } from 'react'

export const Auth: FC = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className="mt-40 flex flex-col justify-center items-center bg-slate-900 text-white">
      <h1 className="text-center text-xl mb-10">
        {isLogIn ? 'Sign In' : 'Sign up'}
      </h1>
      <form className="flex w-1/3 flex-col mx-auto gap-5">
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
