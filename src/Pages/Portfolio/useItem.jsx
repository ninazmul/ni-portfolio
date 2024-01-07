import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useItem = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: items = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["item"],
    queryFn: async () => {
      const res = await axiosPublic.get("/items");
      return res.data;
    },
  });

  return [items, refetch, loading];
};

export default useItem;
