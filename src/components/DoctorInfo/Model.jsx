
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Model.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Model = ({closeModel,pdfurl,text}) => {
  const pdfUrl = pdfurl;
  const modifiedUrl = pdfUrl.replace('/view', '/preview');
  return (
    <>
      <div className="model-wrapper" onClick={closeModel}></div>
      <div className="model-container">
      <div className="text-div">
       <h6 className="text-heading">{text}</h6>
       <FontAwesomeIcon onClick={closeModel} icon={faXmark} size="2xl" />
      </div>
      <div className="modal">
      <embed
        src={modifiedUrl}
        type="application/pdf"
        style={{ width: '430px', height: '650px' }}
      />
      </div>
      <button onClick={closeModel}>Close</button>
    </div>
    </>
  )
}

export default Model