import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="bg-gradient-to-tr from-white to-gray-200">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="flex w-full flex-col p-3 text-center">
          <div className="mb-6 flex flex-col">
            <span className="text-2xl font-semibold md:text-4xl">
              Aplikasi E-Voting Pemilihan Ketua
            </span>
            <span className="text-xl md:text-2xl">Fakultas Informatika</span>
            <span className="font-semibold text-red-600">
              Universitas Telkom
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <button
              className="rounded-md bg-gray-400 px-3 py-2 text-white shadow hover:bg-gray-500"
              onClick={() => router.push('/auth')}
            >
              Login
            </button>
            <button className="rounded-md bg-white px-3 py-2 text-gray-600 shadow hover:bg-gray-50 hover:text-gray-700">
              Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
