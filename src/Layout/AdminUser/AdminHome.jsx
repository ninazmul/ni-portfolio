import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/admin-stats");
        return res.data;
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching admin stats:", error);
        throw error; // Rethrow the error to let React Query handle it
      }
    },
  });

  if (isLoading) {
    return <p>Loading...</p>; // You can show a loading indicator while data is being fetched
  }

  if (isError || !stats) {
    return <p>Error loading admin stats</p>; // You can handle errors here
  }

  return (
    <div>
      <h1 className="text-center text-4xl pt-4 text-fuchsia-500 font-extrabold uppercase">
        Welcome to <span className="text-white">Admin</span> Home
      </h1>
      <div className="flex justify-center my-4">
        <div className="stats stats-vertical lg:stats-horizontal shadow glass rounded-none w-full h-full ">
          <div className="stat text-white">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{stats.users}</div>
          </div>

          <div className="stat text-fuchsia-500">
            <div className="stat-title">Total Items</div>
            <div className="stat-value">{stats.items}</div>
          </div>

          <div className="stat text-white">
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value">{stats.reviews}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
