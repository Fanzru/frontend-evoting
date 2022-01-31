import Link from "next/link";
import { useRouter } from "next/router";
import { FaIdCardAlt, FaUser, FaUserCheck } from "react-icons/fa";

const Step = () => {
  const router = useRouter();
  const urlString = router.pathname;
  const arrUrl = urlString.split('/');
  
  return (
    <div className="w-full pt-3 pb-6">
      <div className="flex items-center justify-center">
        <div className="flex w-1/3 items-center justify-center">
          <div className="flex flex-col items-center">
            <Link href={'/ktm'}>
              <a
                className={`flex h-10 w-10 rounded-full ${
                  arrUrl[1] == 'ktm'
                    ? 'bg-red-400'
                    : arrUrl[1] == 'foto'
                    ? 'bg-green-400'
                    : arrUrl[1] == 'pemilihan'
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                } items-center justify-center`}
              >
                <FaIdCardAlt />
              </a>
            </Link>
          </div>
          <span className="mx-3 h-3 w-full rounded-full bg-gray-300"></span>
        </div>

        <div className="flex w-1/3 items-center justify-center">
          <div className="flex flex-col items-center">
            <Link href={'/foto'}>
              <a
                className={`flex h-10 w-10 rounded-full ${
                  arrUrl[1] == 'foto'
                    ? 'bg-red-400'
                    : arrUrl[1] == 'pemilihan'
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                } items-center justify-center`}
              >
                <FaUser />
              </a>
            </Link>
          </div>
          <span className="mx-3 h-3 w-full rounded-full bg-gray-300"></span>
        </div>

        <div className="flex flex-col items-center">
          <Link href={'/pemilihan'}>
            <a
              className={`flex h-10 w-10 rounded-full ${
                arrUrl[1] == 'pemilihan' ? 'bg-red-400' : 'bg-gray-300'
              } items-center justify-center`}
            >
              <FaUserCheck />
            </a>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  )
};

export default Step;
