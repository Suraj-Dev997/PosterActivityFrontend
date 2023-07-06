import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import "./MoreInfo.css";
import { Link} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IdContext } from "../contextapi/IdContext";
import axios from "axios";
const MoreInfo1 = () => {
  
  const {id} = useContext(IdContext)
  const [docData,setDocData] = useState({})

  useEffect(()=>{
    axios.get(`http://localhost:8081/getdoctor/${id}`).then((res)=>setDocData(res.data[0]))
    
  },[])


  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="home-main-div">
      
      <Link to={`/dashboard/netcast-poster/${id}`}><FontAwesomeIcon icon={faReply} size="2xl"/></Link>

        <div className="home-img-div">
          <img src="https://netcastservice.com/Content/assets/img/netcast-streaming-logo_new.svg" alt="logo img" />
        </div>
        <div className="home-profile-container">
          <div className="home-profile-img">
            <div className="home-profile-img-div">
              <img
                className="home-profile-doc-img"
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
        <div>
          <h6 className="heading-div"> Management of High Blood Pressure</h6>
          <div className="heading-img-div">
            <img src="https://sahayak.org/images/shape@2x.png" alt="" />
          </div>
        </div>
        <div className="home-but-main-div">
          <div className="home-but-div1">
         
              <div className="home-but-div">
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
           
           
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/embed/l3xY-54Y2IU")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
           
           
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/watch?v=q-ueboQo_jU")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
            
            
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/embed/sU_sehEu5nY")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
         
          </div>
          <div className="home-but-div2">
           
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://imagicahealth.live/sahayak/?id=1977")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
          
            
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://open.spotify.com/album/4xnxWa9CyAxxgUonT2bZOm")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
            
          
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://open.spotify.com/episode/62s1z5Kgh7eAOYwzEItIp4")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
          
            
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/watch?v=ffwm4mAq-Dg&feature=youtu.be")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo1;
