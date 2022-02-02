import { useRouter } from 'next/router'
import { FaUser, FaUserCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectCaptureValue } from '../redux/captureSlice'
import { selectSubmitFotoValue } from '../redux/submitFotoSlice'
const Step = () => {
  const router = useRouter()
  const urlString = router.pathname
  const arrUrl = urlString.split('/')
  const submitFoto = useSelector(selectSubmitFotoValue)

  const handleClick = (): void => {
    if (submitFoto) {
      router.push('/foto')
    }
  }

  const handlePemilihan = (): void => {
    if (submitFoto) {
      router.push('/pemilihan')
    }
  }

  return (
    <div className="w-full pt-3 pb-6">
      <div className="flex items-center justify-center">
        <div className="flex w-1/3 items-center justify-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-10 w-10 rounded-full ${
                !submitFoto ? 'bg-red-400' : 'bg-green-400'
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
              submitFoto ? 'bg-red-400' : 'bg-gray-300'
            } items-center justify-center`}
            onClick={handlePemilihan}
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
