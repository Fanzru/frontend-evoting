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
      <div className="bg-gray-100 min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <Step />
          <div className="flex flex-col items-center justify-center mx-4 md:mx-8">
            <h1 className="text-2xl font-bold mb-6">FOTO KTM</h1>
            <Webcam 
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
            <div className="w-full justify-evenly items-center py-5 grid grid-cols-3 justify-items-center">
              <span></span>
              <button className="w-10 h-10 bg-red-500 rounded-full hover:bg-red-600 focus:ring-offset-2 focus:ring-2 ring-red-500" onClick={capture}></button>
              <button className="w-10 h-10 bg-gray-300 rounded-full hover:bg-gray-400 flex justify-center items-center text-white text-lg" onClick={handleClick}>
                <HiRefresh />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dev;
