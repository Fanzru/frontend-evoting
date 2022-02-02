import { useRouter } from 'next/router'
import { FaUser, FaUserCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectCaptureValue } from '../redux/captureSlice'
const Step = () => {
  const router = useRouter()
  const urlString = router.pathname
  const arrUrl = urlString.split('/')
  const captureValue = useSelector(selectCaptureValue)

  const handleClick = (): void => {
    if (captureValue) {
      router.push('/foto')
    }
  }

  return (
    <div className="w-full pt-3 pb-6">
      <div className="flex items-center justify-center">
        <div className="flex w-1/3 items-center justify-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-10 w-10 rounded-full ${
                true
                  ? 'bg-red-400'
                  : true
                  ? 'bg-green-400'
                  : 'bg-gray-300'
              } items-center justify-center`}
              onClick={handleClick}
            >
              <FaUser />
            </div>
          </div>
          <span className="mx-3 h-3 w-full rounded-full bg-gray-300"></span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`flex h-10 w-10 rounded-full ${
              arrUrl[1] == 'pemilihan' ? 'bg-red-400' : 'bg-gray-300'
            } items-center justify-center`}
          >
            <FaUserCheck />
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Step
