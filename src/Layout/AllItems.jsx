import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useItem from "../Pages/Portfolio/useItem";
import Swal from "sweetalert2";
import useAxiosSecure from "../Pages/Hooks/useAxiosSecure";

const AllItems = () => {
  const [items, refetch] = useItem(); 
  const axiosSecure = useAxiosSecure();

  const handleOnDelete = async (itemId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/items/${itemId}`);
        if (res.data.deletedCount > 0) {
          await refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        } else {
          throw new Error("Failed to delete item");
        }
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the item.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center text-4xl pt-4 text-fuchsia-500 font-extrabold uppercase">
          Manage All item's: {items.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <figure className="">
                      {item.imgURL && (
                        <img
                          className="w-20 h-10 rounded-lg"
                          src={item.imgURL}
                          alt="Project"
                        />
                      )}
                      {item.videoURL && (
                        <video
                          className="w-20 h-10 rounded-lg"
                          src={item.videoURL}
                          controls
                          alt="Project Video"
                        />
                      )}
                      {item.audioURL && (
                        <audio
                          className="w-20 h-10 rounded-lg"
                          src={item.audioURL}
                          controls
                          alt="Project Audio"
                        />
                      )}
                    </figure>
                  </td>
                  <td>{item.projectName}</td>
                  <td>
                    <Link
                      to={`/dashboard/update/${item._id}`}
                      className="btn btn-outline btn-sm rounded-full"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleOnDelete(item._id)}>
                      <FaTrashCan className="text-red-600"></FaTrashCan>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
