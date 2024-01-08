import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://portfolio-server-umber-pi.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
