import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }
  return data;
}

function SignUp() {
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

    try {
      const result = await createUser(enteredEmail, enteredPassword);
      router.replace("/login");
      toast.success("ثبت نام انجام شد،لطفا وارد شوید", {
        position: "bottom-right",
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:flex">
        <Image
          src="/images/illustration/signin.jpg"
          alt="sign in"
          width={665}
          height={765}
        />
      </div>
      <div className="bg-gray-400 dark:bg-neutral-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 dark:bg-neutral-500 p-8 px-8 rounded-lg"
          onSubmit={signUpHandler}
        >
          <h2 className="text-4xl font-bold text-center text-white dark:text-black">
            ثبت نام
          </h2>
          <div className="flex flex-col text-gray-400 dark:text-neutral-900 py-2">
            <label>نام کاربری</label>
            <input
              className="rounded-lg bg-gray-700 dark:bg-neutral-600 dark:focus:bg-neutral-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
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
              className=" rounded-lg bg-gray-700 dark:bg-neutral-600 dark:focus:bg-neutral-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              required
              ref={passwordInputRef}
            />
            {!passwordIsValid && (
              <p className="text-red-600">رمز عبور اشتباه وارد شده</p>
            )}
          </div>

          <button className="btn">ثبت نام کنید</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
