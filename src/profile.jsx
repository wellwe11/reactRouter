import { useParams } from "react-router-dom";

import DefaultProfile from "./defaultProfile";
import PageOneElement from "./pageOne";
import PageTwoElement from "./pageTwo";

const Profile = () => {
  const { name } = useParams();

  console.log(name);

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <h2>The profile visited is here:</h2>
      {name === "pageone" ? (
        <PageOneElement />
      ) : name === "pagetwo" ? (
        <PageTwoElement />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
