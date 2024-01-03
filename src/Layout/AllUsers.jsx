import UserDetails from "../Pages/About/UserDetails";


const AllUsers = () => {
    return (
      <div>
        <div>
          <h1 className="text-center text-4xl ml-32 md:ml-0 pt-4 text-fuchsia-500 font-extrabold uppercase">My Details</h1>
          <div className="flex justify-center p-4">
            <UserDetails />
          </div>
        </div>
      </div>
    );
};

export default AllUsers;