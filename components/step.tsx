import { FaIdCardAlt, FaUser, FaUserCheck } from "react-icons/fa";

const Step = () => {
  return (
    
      <div className="w-full">
        <div className="flex items-center justify-center">

          <div className="flex items-center justify-center w-1/3">
            <div className="flex flex-col items-center">
              <div className="rounded-full w-10 h-10 flex bg-gray-300 items-center justify-center">
                <FaIdCardAlt />
              </div>
            </div>
            <span className="w-full mx-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
          
          <div className="flex items-center justify-center w-1/3">
            <div className="flex flex-col items-center">
              <div className="rounded-full w-10 h-10 flex bg-gray-300 items-center justify-center">
                <FaUser />
              </div>
            </div>
            <span className="w-full mx-3 h-3 bg-gray-300 rounded-full"></span>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-full w-10 h-10 flex bg-gray-300 items-center justify-center">
              <FaUserCheck />
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Step;
