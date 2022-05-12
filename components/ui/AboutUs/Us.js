import { Fragment } from "react";
import TeamMember from "./TeamMember";

const imagePath = "images/image-22.jpg";

function Us(props) {
  const { personnel } = props;

  return (
    <Fragment>
      <h3 className="py-12 px-5 text-2xl dark:text-slate-200">تیم جذاب ما</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  place-items-center ">
        {personnel.map((member) => (
          <TeamMember
            key={member.id}
            id={member.id}
            name={member.name}
            image={member.image}
            job={member.job}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default Us;
