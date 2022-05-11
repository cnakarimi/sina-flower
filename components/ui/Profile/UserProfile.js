import Image from "next/image";
import PasswordChangerInput from "./PasswordChangerInput";

function UserProfile() {
  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:flex">
        <Image
          src="/images/illustration/change-password.jpg"
          alt="bb"
          width={665}
          height={765}
        />
      </div>
      <PasswordChangerInput onChangePassword={changePasswordHandler} />
    </div>
  );
}

export default UserProfile;
