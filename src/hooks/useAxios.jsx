import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ecommerce-saas-server-wine.vercel.app/api/v1/",
  headers: {
    "store-id": process.env.NEXT_PUBLIC_STORE_ID,
  },
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
