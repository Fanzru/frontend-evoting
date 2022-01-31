import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  return (
    <div className=" sm:bg-gray-100">
      <div className="flex justify-center items-center h-screen container mx-auto px-4">
        <div className="sm:p-5 sm:border-2 sm:rounded-xl bg-white w-full md:w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <div className="font-semibold sm:text-xl flex flex-col text-center">
              <span>Registrasi Pemilih</span>
            </div>
            <div className="pt-5">
              <input type="text" className="block w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" placeholder="Email SSO" />
            </div>
            <div className="pt-3">
              <input type="password" name="Password" id="Password" className="block w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" placeholder="Password" />
            </div>
            <div className="pt-3 flex items-center justify-between">
              <button className='px-4 py-2 rounded-md bg-red-400 text-white hover:bg-red-500 text-sm md:text-base' onClick={() => {router.push("/auth")}}>Kembali</button>
              <div className="flex items-center space-x-2">
                <button className='px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 text-sm md:text-base'>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Register;