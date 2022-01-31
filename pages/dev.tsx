import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Step from "../components/step";

const Dev = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  
  return (
    <>
      <div className="flex flex-col items-center justify-center py-3">
      <Step />
        <div className="flex items-center justify-center py-3">
          <Webcam 
            mirrored={true} 
            ref={webcamRef} 
            screenshotFormat="image/jpeg" 
            screenshotQuality={1}
            // videoConstraints={videoConstraints}
          />
          {imgSrc && (
            <img
              src={imgSrc}
            />
          )}
        </div>
        <button className="w-10 h-10 mt-10 bg-red-500 rounded-full hover:bg-red-600 focus:ring-offset-2 focus:ring-2 ring-red-500" onClick={capture}></button>
      </div>
    </>
  );
};

export default Dev;
