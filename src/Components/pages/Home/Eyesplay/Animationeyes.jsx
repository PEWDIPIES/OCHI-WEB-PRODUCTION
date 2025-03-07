import { useState } from 'react';
import Eyesbackground from "./Eyesbackground";
import bgVideo from "/src/assets/images/bg.mp4"; // ✅ Correctly importing the video

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
            <video autoPlay loop muted>
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animationeyes;
