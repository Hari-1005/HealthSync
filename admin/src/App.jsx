import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddDoctor from "./pages/Admin/AddDoctor";
import AllAppointments from "./pages/Admin/AllAppointments";
import Dashboard from "./pages/Admin/Dashboard";
import DoctorsList from "./pages/Admin/DoctorsList";
import WelcomePage from "./pages/Admin/WelcomePage";

const App = () => {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar/>
      <div className="flex items-start">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/admin-dashboard" element={<Dashboard/>}/>
          <Route path="/add-doctor" element={<AddDoctor/>}/>
          <Route path="/all-appointments" element={<AllAppointments/>}/>
          <Route path="/doctors-list" element={<DoctorsList/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
