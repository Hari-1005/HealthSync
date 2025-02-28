import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : "");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    const { data } = await axios.get(backendUrl + "/api/admin/all-doctors", {
      headers: { aToken },
    });
    if (!data.success) return toast.error("failed to fetch doctors");
    setDoctors(data.doctors);
  };

  const changeAvailability = async(docId) => {
      try {
        const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {docId}, {headers: {aToken}});
        if(data.success){
          toast(data.message, {
            position: "bottom-right",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          getAllDoctors();
        }
      } catch (error) {
        toast.error(error.message)
      }
    };

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
