import axios from "axios";
import { useEffect, useState } from "react";
import DoctorComponent from "./Doctor";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorList, setDoctorList] = useState([]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    mobile: "",
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (
      !selectedFile ||
      Object.values(formData).some((value) => value === "")
    ) {
      alert("Please select a file and fill in all text fields");
      return;
    }

    try {
      const postData = new FormData();
      postData.append("imgname", selectedFile);
      Object.entries(formData).forEach(([key, value]) => {
        postData.append(key, value);
      });

      await axios.post("http://localhost:8081/add-doctor", postData);

      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    }
    setIsModalOpen(false);
    getDocData();
  };

  useEffect(() => {
    getDocData();
  }, []);

  function getDocData() {
    axios
      .get("http://localhost:8081/doc-data")
      .then((res) => setDoctorList(res.data));
  }

  return (
    <div>
      <h1>Dashbord</h1>
      <button
        onClick={handleModalToggle}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Add Doctor
      </button>
      <Link to={"/admin-portal"}>
      <button
        onClick={handleModalToggle}
        className="bg-blue-500 text-white ml-4 py-2 px-4 rounded-md"
      >
        Admin Portal
      </button></Link>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl mb-4">Add Doctor</h2>

            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Photo</label>
                <input
                  type="file"
                  name="imgname"
                  className="border border-gray-300 px-4 py-2 w-full"
                  onChange={handleFileChange}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 px-4 py-2 w-full"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  className="border border-gray-300 px-4 py-2 w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  className="border border-gray-300 px-4 py-2 w-full"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  className="border border-gray-300 px-4 py-2 w-full"
                  onChange={handleInputChange}
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Render the doctor components */}
      {/* Replace this section with your doctor component code */}
      <div className="flex gap-4 flex-wrap">
        {doctorList &&
          doctorList.map((doctor, index) => {
            return (
              <DoctorComponent key={index} doctor={doctor}></DoctorComponent>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
