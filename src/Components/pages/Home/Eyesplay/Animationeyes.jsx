import { useState } from 'react';
import Eyesbackground from "./Eyesbackground";

const Animationeyes = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(prev => !prev); 
  };

  return (
    <div className="Animationeyes">
      <div onClick={handleClick} style={{ cursor: 'pointer', position: 'relative' }}>
        <Eyesbackground />
        
        {showVideo && (
          <div className="video-container">
            <video autoPlay loop    controls>
              <source src="/src/assets/images/file.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animationeyes;
