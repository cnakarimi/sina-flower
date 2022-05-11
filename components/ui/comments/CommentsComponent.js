import { Fragment } from "react";

function CommentsComponent(props) {
  return (
    <Fragment>
      <p className="mb-2">{props.name}</p>
      <div className=" tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 dark:bg-neutral-500  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500">
        {props.text}
      </div>
    </Fragment>
  );
}

export default CommentsComponent;
