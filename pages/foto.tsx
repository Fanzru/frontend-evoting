import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Step from '../components/step'
import { HiCheck, HiRefresh, HiX } from 'react-icons/hi'
import ButtonCapture from '../components/buttonCapture'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { changeCapture, selectCaptureValue } from '../redux/captureSlice'

const FotoDiri = () => {
  const FACING_MODE_USER = 'user'
  const FACING_MODE_ENVIRONMENT = 'environment'

  const webcamRef: any = useRef('')
  const [imgSrc, setImgSrc] = useState('')
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER)
  const [picture, setPicture] = useState('')
  const dispatch = useDispatch()
  const router = useRouter();

  const captureValue = useSelector(selectCaptureValue);

  const videoConstraints: any = {
    facingMode: FACING_MODE_USER,
  }

  const capture = useCallback((): void => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    dispatch(changeCapture(true))
  }, [webcamRef, setImgSrc])

  const handleSwitch = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    )
  }, [])

  const handleReCapture = () => {
    dispatch(changeCapture(!captureValue))
  }

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('file', imgSrc)
      formData.append('upload_preset', 'my-uploads')

      const data = await fetch(
        'https://api.cloudinary.com/v1_1/revdonz/upload',
        {
          method: 'POST',
          body: formData,
        }
      ).then((r) => r.json())

      setPicture(data.secure_url)
      router.push('/pemilihan');
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <Step />
          <div className="mx-4 flex flex-col items-center justify-center md:mx-8">
            <h1 className="mb-6 text-2xl font-bold">FOTO DIRI</h1>
            {!captureValue ? (
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                screenshotQuality={1}
                videoConstraints={{ ...videoConstraints, facingMode }}
              />
            ) : (
              imgSrc && <img src={imgSrc} />
            )}

            <div className="grid w-full grid-cols-3 items-center justify-evenly justify-items-center py-5">
              <span>
                {captureValue && (
                  <ButtonCapture data={handleSubmit}>
                    <HiCheck />
                  </ButtonCapture>
                )}
              </span>
              <span className="h-12">
                {!captureValue && (
                  <ButtonCapture
                    data={capture}
                    dataStyle={`tes h-12 hover:bg-red-600 bg-red-500 w-12 ring-red-500 focus:ring-2 focus:ring-offset-2`}
                  />
                )}
              </span>
              <span>
                {captureValue ? (
                  <ButtonCapture data={handleReCapture}>
                    <HiX />
                  </ButtonCapture>
                ) : (
                  <ButtonCapture data={handleSwitch}>
                    <HiRefresh />
                  </ButtonCapture>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FotoDiri
