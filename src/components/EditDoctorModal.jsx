import React, { useState } from 'react';

const EditDoctorModal = ({ doctor, isOpen, onClose, onSave }) => {
  const [editedDoctor, setEditedDoctor] = useState({
    name: doctor.name,
    city: doctor.city,
    state: doctor.state,
    mobile: doctor.mobile,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Pass the edited doctor data to the onSave callback
    onSave(doctor.id, editedDoctor);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="bg-white rounded-lg p-4 w-80">
        <h2 className="text-lg font-semibold mb-4">Edit Doctor</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedDoctor.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={editedDoctor.city}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-medium">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={editedDoctor.state}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-medium">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={editedDoctor.mobile}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDoctorModal;
