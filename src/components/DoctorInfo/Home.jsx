
import { Link, useParams } from "react-router-dom";
import "./Home.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IdContext } from "../contextapi/IdContext";

const Home = () => {

  const { id } = useParams();

  const {handelchange} = useContext(IdContext);

  const [docData, setDocData] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8081/getdoctor/${id}`).then((res)=>setDocData(res.data[0]))
    handelchange(id)
  },[])
  return (
    <>
      <div className="home-main-div">
     
        <div className="home-img-div">
          <img src="https://netcastservice.com/Content/assets/img/netcast-streaming-logo_new.svg" alt="logo img" />
        </div>
        <div className="home-profile-container">
          <div className="home-profile-img">
            <div className="profile-img-div">
              <img className="profile-img"
                src={`http://localhost:8081/uploads/${docData.imgname}`}
                alt="profile image"
              />
            </div>
          </div>
          <div className="home-info">
            <h1 className="info-name">Dr. {docData.name}</h1>
            <h6 className="info info-deg">MBBS,MD</h6>
            <h6 className="info info-city">{docData.city}</h6>
          </div>
        </div>
        <div className="home-main-but-div">
           <div>
           <Link to={"/blood-info"}>
           <div className="home-button-div">
           <img
              
              src="http://via.placeholder.com/200x150"
              alt=""
            />
           </div>
           </Link>
           <Link to={"/blood-management"}>
            <div className="home-button-div">
            <img 
              src="http://via.placeholder.com/200x150"
              alt=""
            />
            </div>
            </Link>
           </div>
           <div>
           <Link to={"/blood-info"}>
           <div className="home-button-div">
           <img
              src="http://via.placeholder.com/200x150"
              alt=""
            />
           </div>
           </Link>
           <Link to={"/blood-management"}>
            <div className="home-button-div">
            <img 
              src="http://via.placeholder.com/200x150"
              alt=""
            />
            </div>
            </Link>
           </div>
        </div>
      </div>
    </>
  );
};

export default Home;
