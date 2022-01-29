import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen sm:bg-gray-100 px-4">
      <div className="sm:p-5 sm:border-2 rounded-xl bg-white">
        <div className="flex flex-col">
          <div className="font-semibold sm:text-xl flex flex-col text-center">
            <span>E-Voting Pemilihan Raya Fakultas XXX dan XXX</span>
            <span>Universitas Telkom 2021</span>
          </div>
          <div className="pt-5">
            <input type="text" className="block w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" placeholder="Email SSO" />
          </div>
          <div className="pt-3">
            <input type="text" name="Password" id="Password" className="block w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" placeholder="Password" />
          </div>
          <div className="pt-3 flex items-center justify-between">
            <button className='px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500'>Login</button>
            <div className="flex items-center space-x-2">
              <span className='text-gray-400 text-sm'>Belum punya akun?</span>
              <button className='px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500'>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Login;
