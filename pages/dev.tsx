import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Step from "../components/step";
import { HiRefresh } from "react-icons/hi";

const Dev = () => {
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";

  const videoConstraints: any = {
    // aspectRatio: 0.75
    facingMode: FACING_MODE_USER
  }

  const webcamRef: any = useRef("");
  const [imgSrc, setImgSrc] = useState(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

  

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const handleClick = useCallback(() => {
    setFacingMode(
      prevState =>
        prevState === FACING_MODE_USER
          ? FACING_MODE_ENVIRONMENT
          : FACING_MODE_USER
    );
  }, []);
  
  


  return (
    <>
      <div className="items-center justify-center">
        <div className="mx-8 py-3 flex flex-col items-center justify-center">
          <Step />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold py-6">FOTO KTM</h1>
            <Webcam 
              mirrored={true} 
              ref={webcamRef} 
              screenshotFormat="image/jpeg" 
              screenshotQuality={1}
              videoConstraints={{...videoConstraints, facingMode}}
            />
            {imgSrc && (
              <img
                src={imgSrc}
              />
            )}
          </div>
          <div className="flex justify-end">
            <button className="w-10 h-10 mt-10 bg-red-500 rounded-full hover:bg-red-600 focus:ring-offset-2 focus:ring-2 ring-red-500" onClick={capture}></button>
            <button className="w-10 h-10 mt-10 bg-gray-300 rounded-full hover:bg-gray-400 flex justify-center items-center text-white text-lg" onClick={handleClick}>
              <HiRefresh />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dev;
