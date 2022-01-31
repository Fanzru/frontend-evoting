import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Step from '../components/step'
import { HiCheck, HiRefresh, HiX } from 'react-icons/hi'
import ButtonCapture from '../components/buttonCapture'
import Link from 'next/link'

const Dev = () => {
  const FACING_MODE_USER = 'user'
  const FACING_MODE_ENVIRONMENT = 'environment'

  const videoConstraints: any = {
    // aspectRatio: 0.75
    facingMode: FACING_MODE_USER,
  }

  const webcamRef: any = useRef('')
  const [imgSrc, setImgSrc] = useState(null)
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER)
  const [isCapture, setIsCapture] = useState(false)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    setIsCapture(true)
  }, [webcamRef, setImgSrc])

  const handleSwitch = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    )
  }, [])

  const handleReCapture = () => {
    setIsCapture(!isCapture)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <Step />
          <div className="mx-4 flex flex-col items-center justify-center md:mx-8">
            <h1 className="mb-6 text-2xl font-bold">FOTO DIRI</h1>
            {!isCapture ? (
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
                {isCapture && (
                  <Link href={'/pemilihan'}>
                    <a>
                      <ButtonCapture>
                        <HiCheck />
                      </ButtonCapture>
                    </a>
                  </Link>
                )}
              </span>
              <span className="h-12">
                {!isCapture && (
                  <ButtonCapture
                    data={capture}
                    dataStyle={`tes h-12 hover:bg-red-600 bg-red-500 w-12 ring-red-500 focus:ring-2 focus:ring-offset-2`}
                  />
                )}
              </span>
              <span>
                {isCapture ? (
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

export default Dev
