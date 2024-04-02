import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://complete-foodi-server-69op.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
