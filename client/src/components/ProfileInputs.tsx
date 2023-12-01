import { ChangeEvent, FC } from 'react'

interface ProfileInputsProps {
  authData: any;
  changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileInputs: FC<ProfileInputsProps> = ({ authData, changeHandler }) => {
  return (
    <>
      <label htmlFor='phoneNumber' className='flex flex-col'>
        <small>Phone Number</small>
        <input
          type='text'
          className='input'
          placeholder='Phone number'
          name='phoneNumber'
          value={authData.phoneNumber}
          onChange={changeHandler}
          required
        />
      </label>
      <label htmlFor='lastName' className='flex flex-col'>
        <small>Last name</small>
        <input
          type='text'
          className='input'
          placeholder='Last name'
          name='lastName'
          value={authData.lastName}
          onChange={changeHandler}
          required
        />
      </label>
      <label htmlFor='firstName' className='flex flex-col'>
        <small>First name</small>
        <input
          type='text'
          className='input'
          placeholder='First name'
          name='firstName'
          value={authData.firstName}
          onChange={changeHandler}
          required
        />
      </label>
      <label htmlFor='nickname' className='flex flex-col'>
        <small>Nickname</small>
        <input
          type='text'
          className='input'
          placeholder='Nickname'
          name='nickname'
          value={authData.nickname}
          onChange={changeHandler}
          required
        />
      </label>
      <label htmlFor='description' className='flex flex-col'>
        <small>Description</small>
        <input
          type='text'
          className='input'
          placeholder='Description'
          required
          name='description'
          value={authData.description}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor='position' className='flex flex-col'>
        <small>Position</small>
        <input
          type='text'
          className='input'
          placeholder='Position'
          required
          name='position'
          value={authData.position}
          onChange={changeHandler}
        />
      </label>
    </>
  )
}
