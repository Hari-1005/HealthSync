import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const clearForm = () => {
    setDocImg(false);
    setName("");
    setEmail("");
    setPassword("");
    setExperience("1 Year");
    setFees("");
    setSpeciality("General physician");
    setDegree("");
    setAddress1("");
    setAddress2("");
    setAbout("");
  };

  const onsubithandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Please upload doctor image");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append("about", about);
      formData.append("address", JSON.stringify({ line1:address1, line2:address2 }));

      // send data to backend
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        clearForm();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add doctor");      
    }
  };

  return (
    <form onSubmit={onsubithandler} className="m-6 sm:m-8 w-full">
      <p className="text-lg font-medium mb-3">Add Doctor</p>
      <div className="border p-8 border-gray-200 bg-white rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 cursor-pointer bg-indigo-100 rounded-full border-2 border-indigo-200"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            id="doc-img"
            type="file"
            className="hidden"
          />
          <p>
            upload doctor <br />
            picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full flex flex-col gap-4 lg:flex-1">
            <div className="flex flex-col gap-1 flex-1">
              <p>Your Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="px-3 py-2 border rounded border-gray-200"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="px-3 py-2 border rounded border-gray-200"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <p>Set Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="px-3 py-2 border rounded border-gray-200"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="px-3 py-2 border rounded border-gray-200"
              >
                <option value="1 year">1 Year</option>
                <option value="2 year">2 Year</option>
                <option value="3 year">3 Year</option>
                <option value="4 year">4 Year</option>
                <option value="5 year">5 Year</option>
                <option value="6 year">6 Year</option>
                <option value="7 year">7 Year</option>
                <option value="8 year">8 Year</option>
                <option value="9 year">9 Year</option>
                <option value="10 year">10 Year</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="px-3 py-2 border rounded border-gray-200"
                type="number"
                placeholder="Doctor fees"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 lg:flex-1">
            <div className="flex flex-col gap-1 flex-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="px-3 py-2 border rounded border-gray-200"
                id=""
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <p>Degree</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="px-3 py-2 border rounded border-gray-200"
                type="text"
                placeholder="Degree"
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="px-3 py-2 border rounded border-gray-200"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="px-3 py-2 border rounded border-gray-200"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 flex-1 text-gray-600">
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="border p-2 rounded border-gray-200"
            rows={5}
            placeholder="write about doctor"
          ></textarea>
        </div>
        <button
          className="mt-6 px-6 py-2 bg-primary rounded-full text-white cursor-pointer"
          type="submit"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
