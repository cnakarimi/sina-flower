import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CommentsComponent from "../../../components/ui/comments/CommentsComponent";
import Head from "next/head";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingCommnets] = useState();

  const router = useRouter();
  const productId = router.query.commentId;

  useEffect(() => {
    setIsFetchingCommnets(true);
    fetch("/api/comments/" + productId)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        setIsFetchingCommnets(false);
      });
  }, []);

  const commentsList = comments.map((items) => (
    <CommentsComponent
      key={items._id}
      id={items.id}
      name={items.name}
      text={items.text}
    />
  ));

  return (
    <Fragment>
      <Head>
        <title>نظرات</title> <meta name="desciption" content="" />
      </Head>
      <div className="w-full mx-auto  max-w-3xl bg-white dark:bg-neutral-600 shadow p-8 text-gray-700 dark:text-white">
        <h3 className="text-2xl mb-5">نظر کاربران</h3>
        {commentsList}
        {isFetchingComments && <p>در حال بارگزاری...</p>}
        <div className="mt-4"></div>
      </div>
    </Fragment>
  );
}

export default Comments;
