import {useRouter} from 'next/router'

const End = () => {
  const router = useRouter()
  return (
    <div >
      <div className="h-screen mx-8 flex flex-col items-center justify-center">
        <p className="text-3xl text-center font-bold">
          TERIMAKASIH TELAH MEMILIH
        </p>
        <button onClick={()=> {router.push("/")}} className="mt-8">
          <p className="underline underline-offset-2">KEMBALI</p>
        </button>
      </div>
    </div>
  )
}

export default End;