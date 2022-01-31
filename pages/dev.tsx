import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Step from "../components/step";

const Dev = () => {
  const webcamRef: any = useRef("");
  const [imgSrc, setImgSrc] = useState(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  
  const videoConstraints = {
    aspectRatio: 0.75
  }
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
              videoConstraints={videoConstraints}
            />
            {imgSrc && (
              <img
                src={imgSrc}
              />
            )}
          </div>
          <div className="flex justify-end">
            <button className="w-10 h-10 mt-10 bg-red-500 rounded-full hover:bg-red-600 focus:ring-offset-2 focus:ring-2 ring-red-500" onClick={capture}></button>
            {/* <button className="w-10 h-10 mt-10 bg-red-500 rounded-full hover:bg-red-600 focus:ring-offset-2 focus:ring-2 ring-red-500" onClick={capture}></button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dev;
