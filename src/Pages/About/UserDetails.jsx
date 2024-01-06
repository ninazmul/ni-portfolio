import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const UserDetails = () => {

    const { user } = useContext(AuthContext);

    return (
      <div className="flex flex-col justify-center items-center">
        <img className="w-48 md:w-72 rounded-lg" src={user.photoURL} alt="" />
        <div className="">
          <p className="text-2xl md:text-4xl text-center">{user.displayName}</p>
          <p className="md:text-xl text-center">{user.email}</p>
        </div>
      </div>
    );
};

export default UserDetails;