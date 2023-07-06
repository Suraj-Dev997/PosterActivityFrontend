import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import "./MoreInfo.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Model from "./Model";
import axios from "axios";
import { IdContext } from "../contextapi/IdContext";
const MoreInfo = () => {
  const [show,setShow] = useState(false)
  const [pdfurl,setPdfurl] = useState("")
  const [text, setText] = useState("")
  
  const {id} = useContext(IdContext)
  const [docData,setDocData] = useState({})

  useEffect(()=>{
    axios.get(`http://localhost:8081/getdoctor/${id}`).then((res)=>setDocData(res.data[0]))
    
  },[])
  const closeModel = ()=>{
    setShow(false);
  }
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
              <img className="home-profile-doc-img"
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
          <h6 className="heading-div"> Know more about High Blood Pressure</h6>
          <div className="heading-img-div">
            <img src="https://sahayak.org/images/shape@2x.png" alt="" />
          </div>
        </div>
        <div className="home-but-main-div">
          <div className="home-but-div1">
            
              <div className="home-but-div" onClick={()=>{
                   setShow(true)
                   setPdfurl('https://drive.google.com/file/d/15MbLq-1JN3anrig2ise9TKE-425KdJ2h/view');
                   setText("Facts About Blood Pressure")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
          
              <div className="home-but-div" onClick={()=>{
                
                   setShow(true)
                   setPdfurl('https://drive.google.com/file/d/1ZKGPmph2pG_x7HvRsLYBpSlZNCfKyMN4/view');
                   setText("Sign & Symptoms")
              }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
         
          </div>
          <div className="home-but-div2">
            
              <div className="home-but-div" onClick={()=>{
                setShow(true)
                setPdfurl('https://drive.google.com/file/d/16pDHK9aIpZ9FNwWBoPsjNchNxDTdkrLn/view');
                setText("Know Your Numbers")
                
           }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
           
           
              <div className="home-but-div" onClick={()=>{
                setShow(true)
                setPdfurl('https://drive.google.com/file/d/1EG-tsqFq925KtFR_B4QEzHfIVwNO99Gb/view');
                setText("Risk Factors")
                
           }}>
                <img
                  src="http://via.placeholder.com/200x150"
                  alt=""
                />
              </div>
           
          </div>
        </div>
      </div>
      {show && <Model closeModel={closeModel} pdfurl={pdfurl} text={text}></Model>}
    </>
  );
};

export default MoreInfo;
