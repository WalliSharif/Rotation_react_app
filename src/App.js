import { useState } from 'react';
import Menu from "./Menu";
import Video from "./Video";
import "./styles.css";



// creating an object | Key value pairs 

const videos = {
  MF_DOOM:
    <embed src ="https://www.youtube.com/watch?v=gSJeHDlhYls"/>,
  Earl_Sweatshirt:
  <embed src ="https://www.youtube.com/watch?v=PjhTvsLesLo"/>,
  Tyler_The_Creator: 
  <embed src ="https://www.youtube.com/watch?v=LSIOcCcEVaE"/>,
  Kendrick_Lamar:
  <embed src ="https://www.youtube.com/watch?v=qbbQb9bEcDQ"/>,
  JPEGMAFIA:
  <embed src ="https://www.youtube.com/watch?v=974TXFKtyls"/>

};


const videoNames = Object.keys(videos);

export default function App() {
  const [videoSrc, setVideoSrc] = useState(videos.Earl_Sweatshirt);

  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div>
      <h1>IN-ROTATION: Music Videos</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );

}
