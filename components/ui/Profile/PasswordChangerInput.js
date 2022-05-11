import { useRef } from "react";

function PasswordChangerInput(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <div className="bg-gray-400 flex flex-col justify-center">
      <form
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        onSubmit={submitHandler}
      >
        <h2 className="text-4xl dark:text-white font-bold text-center">
          تغییر رمز
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label>رمز قبلی</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="password"
            ref={oldPasswordRef}
            required
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label>رمز جدید</label>
          <input
            className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="password"
            ref={newPasswordRef}
            required
          />
        </div>

        <button className="btn">انجام بده</button>
      </form>
    </div>
  );
}

export default PasswordChangerInput;
