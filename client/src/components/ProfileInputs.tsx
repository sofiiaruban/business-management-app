import { ChangeEvent, FC } from "react"

interface ProfileInputsProps {
  authData: any;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileInputs: FC<ProfileInputsProps> = ({ authData, changeHandler }) => {
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="Phone number"
        name="phoneNumber"
        value={authData.phoneNumber}
        onChange={changeHandler}
        required
      />
      <input
        type="text"
        className="input"
        placeholder="Last name"
        name="lastName"
        value={authData.lastName}
        onChange={changeHandler}
        required
      />
      <input
        type="text"
        className="input"
        placeholder="First name"
        name="firstName"
        value={authData.firstName}
        onChange={changeHandler}
        required
      />
      <input
        type="text"
        className="input"
        placeholder="Nickname"
        name="nickname"
        value={authData.nickname}
        onChange={changeHandler}
        required
      />
      <input
        type="text"
        className="input"
        placeholder="Description"
        required
        name="description"
        value={authData.description}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="input"
        placeholder="Position"
        required
        name="position"
        value={authData.position}
        onChange={changeHandler}
      />
    </>
  );
};
