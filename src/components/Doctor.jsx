import { Link } from "react-router-dom";

const DoctorComponent = ({doctor}) => {
   console.log(doctor.imgname)
  return (
    
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <Link to={`netcast-poster/${doctor.id}`}>
      <div className="flex items-center">
        <img
          src={`http://localhost:8081/uploads/${doctor.imgname}`}
          alt={"doctor-photo"}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Doctor Name: {doctor.name}</h3>
          <p className="text-gray-600">City : {doctor.city}</p>
        </div>
      </div>
      <p className="mt-2 text-gray-700">Mobile: {doctor.mobile}</p>
      </Link>
      <Link to={`/poster/${doctor.id}`}>
         <button className="border-2">Select Poster</button>
      </Link>
    </div>
   
  );
};

export default DoctorComponent;
