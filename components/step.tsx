import Link from "next/link";
import { FaIdCardAlt, FaUser, FaUserCheck } from "react-icons/fa";

const Step = () => {
  return (
    
      <div className="w-full">
        <div className="flex items-center justify-center">

          <div className="flex items-center justify-center w-1/3">
            <div className="flex flex-col items-center">
              <Link href={"/dev"}>
                <a className="rounded-full w-10 h-10 flex bg-gray-300 items-center justify-center">
                  <FaIdCardAlt />
                </a>
              </Link>
            </div>
            <span className="w-full mx-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
          
          <div className="flex items-center justify-center w-1/3">
            <div className="flex flex-col items-center">
              <Link href={"/foto"}>
                <a className="rounded-full w-10 h-10 flex bg-gray-300 items-center justify-center">
                  <FaUser />
                </a>
              </Link>
            </div>
            <span className="w-full mx-3 h-3 bg-gray-300 rounded-full"></span>
          </div>

          <div className="flex flex-col items-center">
            <Link href={"/pemilihan"}>
              <a className="rounded-full w-10 h-10 flex bg-gray-300 items-center justify-center">
                <FaUserCheck />
              </a>
            </Link>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Step;
