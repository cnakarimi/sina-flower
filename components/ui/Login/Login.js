import Image from "next/image";
import { useRef, useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function Login() {
  const [userNameIsValid, setUserNameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  async function signUpHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!enteredEmail || !enteredEmail.includes("@")) {
      setUserNameIsValid(false);
    }
    if (!enteredPassword || enteredPassword.trim().length < 7) {
      setPasswordIsValid(false);
    }

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      router.replace("/profile");
      toast.success("با موفقیت وارد حساب شدید", {
        position: "bottom-right",
      });
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:flex">
        <Image
          src="/images/illustration/login.jpg"
          alt="bb"
          width={665}
          height={765}
        />
      </div>
      <div className="bg-gray-400 dark:bg-neutral-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 dark:bg-neutral-500 p-8 px-8 rounded-lg"
          onSubmit={signUpHandler}
        >
          <h2 className="text-4xl text-white dark:text-black font-bold text-center">
            ورود
          </h2>
          <div className="flex flex-col text-gray-400 dark:text-neutral-900 py-2">
            <label>نام کاربری</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 dark:bg-neutral-600 dark:focus:bg-neutral-700 focus:outline-none"
              type="text"
              required
              ref={emailInputRef}
            />
            {!userNameIsValid && (
              <p className="text-red-600">نام کاربری اشتباه است</p>
            )}
          </div>
          <div className="flex flex-col text-gray-400 dark:text-neutral-900 py-2">
            <label>رمز عبور</label>
            <input
              className=" rounded-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 dark:bg-neutral-600 dark:focus:bg-neutral-700 focus:outline-none"
              type="password"
              required
              ref={passwordInputRef}
            />
            {!passwordIsValid && (
              <p className="text-red-600">رمز عبور اشتباه وارد شده</p>
            )}
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center text-gray-400 dark:text-neutral-900">
              <input className="ml-2 " type="checkbox" />
              به یاد داشته باش
            </p>
          </div>
          <button className="btn">وارد شوید</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
