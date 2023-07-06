import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import EditDoctorModal from './EditDoctorModal';
import { useDownloadExcel } from 'react-export-table-to-excel';

const Admin = () => {
  const [doctors, setDoctors] = useState([]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // dowload table in exeldata
  const tableRef = useRef(null);

const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Doctor table',
    sheet: 'Doctors'
})


//   useEffect(() => {
//     // Fetch doctors data from API when component mounts
//     fetchDoctors();
//   }, []);

  const fetchDoctors = async () => {
    try {
      // Make API request to fetch all doctors
      const response = await fetch('http://localhost:8081/doc-data'); // Replace 'api/doctor' with your actual API endpoint

      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      } else {
        console.error('Failed to fetch doctors data');
      }
    } catch (error) {
      console.error('Error fetching doctors data:', error);
    }
  };

  const handleEdit = (doctorId) => {
    const doctor = doctors.find((doctor) => doctor.id === doctorId);
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleDelete = (doctorId) => {

    axios.delete(`http://localhost:8081/delete/${doctorId}`)
    .then((response) => {
    
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor.id !== doctorId)
      );
    
    })
    .catch((error) => {
      console.error('Error deleting doctor:', error);
    });

  };

  const handleSaveDoctor = (doctorId, editedDoctor) => {
   
    fetch(`http://localhost:8081/update/${doctorId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedDoctor),
    })
      .then((response) => {
        if (response.ok) {
        
          setDoctors((prevDoctors) =>
            prevDoctors.map((doctor) =>
              doctor.id === doctorId ? editedDoctor : doctor
            )
          );
          setIsModalOpen(false);
        } else {
          console.error(`Failed to update doctor ${doctorId}`);
        }
      })
      .catch((error) => {
        console.error('Error updating doctor:', error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchDoctors}
      >
        Get All Doctors
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={onDownload}
      >
        Download Data
      </button>
      <table ref={tableRef} className="mt-4 border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Sr No</th>
            <th className="border border-gray-300 px-4 py-2">Doctor Name</th>
            <th className="border border-gray-300 px-4 py-2">Doctor City</th>
            <th className="border border-gray-300 px-4 py-2">Doctor State</th>
            <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{doctor.name}</td>
              <td className="border border-gray-300 px-4 py-2">{doctor.city}</td>
              <td className="border border-gray-300 px-4 py-2">{doctor.state}</td>
              <td className="border border-gray-300 px-4 py-2">{doctor.mobile}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleEdit(doctor.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDoctor && (
        <EditDoctorModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSaveDoctor}
        />
      )}
    </div>
  );
};

export default Admin;
