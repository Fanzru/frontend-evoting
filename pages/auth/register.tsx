import { useRouter } from "next/router";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Register = () => {
  const router = useRouter();
  const [show, setShow] = useState(false)

  return (
    <div className=" sm:bg-gray-100">
      <div className="container mx-auto flex h-screen items-center justify-center px-4">
        <div className="w-full bg-white sm:rounded-xl sm:border-2 sm:p-5 md:w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <div className="flex flex-col text-center font-semibold sm:text-xl">
              <span>Registrasi Pemilih</span>
            </div>
            <div className="pt-5">
              <input
                type="text"
                className="block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Email SSO"
              />
            </div>
            <div className="flex pt-3">
              <input
                type={show ? `text` : 'password'}
                name="Password"
                id="Password"
                className="block z-10 w-full rounded-md rounded-r-none border border-gray-200 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Password"
              />
              <div
                className="flex z-0 items-center justify-center rounded-md rounded-l-none border px-3 py-2 hover:bg-gray-100"
                onClick={() => {
                  setShow(!show)
                }}
              >
                {!show ? <HiEye /> : <HiEyeOff />}
              </div>
            </div>
            <div className="flex items-center justify-between pt-3">
              <button
                className="rounded-md bg-red-400 px-4 py-2 text-sm text-white hover:bg-red-500 md:text-base"
                onClick={() => {
                  router.push('/auth')
                }}
              >
                Kembali
              </button>
              <div className="flex items-center space-x-2">
                <button className="rounded-md bg-gray-400 px-4 py-2 text-sm text-white hover:bg-gray-500 md:text-base">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Register;