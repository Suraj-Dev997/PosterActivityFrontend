import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import domtoimage from 'dom-to-image';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PosterEditor = () => {
  const [text, setText] = useState('Write your text');
  const [fontSize, setFontSize] = useState(14);
  const posterRef = useRef(null);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(Number(event.target.value));
  };

   const {id} = useParams();
  const [docData, setDocData] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8081/getdoctor/${id}`).then((res)=>setDocData(res.data[0]))
   
  },[])

  const handleSave = async () => {
    const poster = posterRef.current;
    
    try {
      const dataUrl = await domtoimage.toPng(poster);
      console.log(dataUrl)
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'poster.png';
      link.click();
    } catch (error) {
      console.error('Error saving poster:', error);
      alert('Error saving poster');
    }
  };


  return (
    <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div>
      <div
        style={{
          border: '1px solid black',
          width: '500px',
          height: '600px',
          position: 'relative',
          backgroundImage:"url('https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhY2tncm91bmQlMjBpbWFnZSUyMGZvciUyMHBvc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60')",
          backgroundSize:"cover",
          textAlign:"center"
        }}
        ref={posterRef}
      >
        {/* <ImgUpload></ImgUpload> */}
      <div>
      <img style={{width:"140px",height:"140px",borderRadius:"50%",margin:"auto"}} src={`http://localhost:8081/uploads/${docData.imgname}`} alt="profilephoto" />
      </div>

       
        <div>
          <h2>Name: {docData.name}</h2>
          <h2>Mobile No: {docData.mobile}</h2>
          <h2>City : {docData.city}</h2>
        </div>
        <Draggable

        >
          
            <div
              style={{
                border: '1px dashed gray',
                padding: '10px',
                fontSize: `${fontSize}px`,
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <div
                contentEditable
                style={{ outline: 'none', minHeight: '1em' }}
                onInput={handleTextChange}
                suppressContentEditableWarning
              >
                {text}
              </div>
            
            </div>
         
        </Draggable>
      </div>
      <div>
        <label>
          Font Size:
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </label>
      </div>
      <div>
        <button onClick={handleSave}>Save Poster</button>
      </div>
      
      </div>
    </div>
  );
};

export default PosterEditor;
