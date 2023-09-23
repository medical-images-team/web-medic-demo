import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PatientTable from './components/PatientTable';



function App() {

  const [imageIndex, setImageIndex] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);

  const images = [
    '/cam_images/image_0.png',
    '/cam_images/image_1.png',
    '/cam_images/image_2.png',
    '/cam_images/image_3.png',
    '/cam_images/image_4.png',
    '/cam_images/image_5.png',
    '/cam_images/image_6.png',
    '/cam_images/image_7.png',
    '/cam_images/image_8.png',
    '/cam_images/image_9.png',
  ];

  const images2 = [
    '/chest_cam_images/image_0.png',
    '/chest_cam_images/image_1.png',
    '/chest_cam_images/image_2.png',
    '/chest_cam_images/image_3.png',
    '/chest_cam_images/image_4.png',
    '/chest_cam_images/image_5.png',
    '/chest_cam_images/image_6.png',
    '/chest_cam_images/image_7.png',
    '/chest_cam_images/image_8.png',
    '/chest_cam_images/image_9.png',
  ];

  const handleChange = (e) => {
    setImageIndex(e.target.value);
  }

  const handleChange2 = (e) => {
    setImageIndex2(e.target.value);
  }

  return (
    <div className="App">
      <h1>Explainable AI（説明可能なAI）</h1>
      <h1>簡易,医用診断支援ツール</h1>
 
      <div style={{display: "inline-block"}}>
        <img src={images[imageIndex]} alt="表示画像" style={{ width: 'auto', height: '300px' }} /><br/>
        <input 
          type="range" 
          min="0" 
          max={images.length - 1}  // maxをimagesの長さ-1に設定
          value={imageIndex} 
          onChange={handleChange} 
        />
      </div>

      <div style={{display: "inline-block"}}>
        <img src={images2[imageIndex2]} alt="表示画像" style={{ width: 'auto', height: '300px' }} /><br/>
        <input 
          type="range" 
          min="0" 
          max={images2.length - 1}  // maxをimagesの長さ-1に設定
          value={imageIndex2} 
          onChange={handleChange2} 
        />
      </div>

      <div>
        <PatientTable />
      </div>
    </div>
  );
}

export default App;
