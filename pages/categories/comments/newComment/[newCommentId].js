import { Fragment, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Head from "next/head";

function YourComment() {
  const [nameIsValid, setNameIsValid] = useState(true);
  const [commentIsValid, setCommentIsValid] = useState(true);

  const router = useRouter();

  const productId = router.query.newCommentId;

  console.log(productId);

  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    toast.info("در حال ارسال نظر شما...", {
      position: "bottom-right",
    });

    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (!enteredName || enteredName.trim() == "") {
      setNameIsValid(false);
    }

    if (!enteredComment || enteredComment.trim() === "") {
      setCommentIsValid(false);
    }

    const commentData = {
      name: enteredName,
      text: enteredComment,
    };

    fetch("/api/comments/" + productId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "خطایی رخ داد");
        });
      })
      .then(
        (data) =>
          toast.success("نظر شما ذخیره شد", {
            position: "bottom-right",
          }),
        router.replace(`/categories/comments/${productId}`)
      )
      .catch((error) => {
        toast.error(error.message || "ارسال اطلاعات ناموفق", {
          position: "bottom-right",
        });
      });
  }

  return (
    <Fragment>
      <Head>
        <title>نظرشما</title> <meta name="desciption" content="" />
      </Head>
      <form
        id="contact-me"
        className="w-full mx-auto  max-w-3xl bg-white shadow p-8 text-gray-700 dark:bg-slate-500"
        onSubmit={sendCommentHandler}
      >
        <h2 className="w-full my-2 text-3xl font-bold leading-tight dark:text-slate-200">
          دیدگاه شما راجب این محصول
        </h2>
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <input
              className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="            اسمتون :
            "
              required
              ref={nameInputRef}
            />
            <label
              htmlFor="name"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              name
            </label>
            {!nameIsValid && <p className=" text-red-600">نام ورودی اشتباه</p>}
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <textarea
              className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              type="text"
              placeholder="نظرتون :"
              required
              ref={commentInputRef}
            ></textarea>
            <label
              htmlFor="message"
              className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
            >
              comment...
            </label>
            {!commentIsValid && (
              <p className=" text-red-600">نظری ننوشته اید نشده</p>
            )}
          </div>
        </div>
        <div className="">
          <button
            className="w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            ارسال
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default YourComment;
