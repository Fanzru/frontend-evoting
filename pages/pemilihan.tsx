import { useState } from "react"
import { useSelector } from "react-redux"
import CardCalon from "../components/pemilihan/cardCalon"
import data from "../data/datacalon"
import { selectSubmitCalonValue } from "../redux/submitCalonSlice"


const Pemilihan = () => {
  const statusCalon = useSelector(selectSubmitCalonValue)
  
  const [vote , setVote] = useState(0)
  const [warn, setWarn] = useState(true)
  const numberCalon: any = []
  data.map((calon, idx) => {
    numberCalon.push(calon.nomor_calon)
  })

  const handleVote = (e: any) => {
    e.preventDefault()
    if (statusCalon) {
      alert('Maaf anda belum memilih')
    } else {
      // logic api
    }
  }

  return (
    <div className="md:bg-gray-100 border min-h-screen">
      <div className="mx-8 ">
        <div className="mt-10">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-8">PILIH CALON ANDA</h1>
            <div className={`flex flex-wrap w-full items-center justify-center gap-4 `}>
              {
                data.map((a, i) =>{
                  return (
                  <div key={i}>
                    <CardCalon data={a} />
                  </div>
                  )
                })
              }
            </div>
            <div className={`flex flex-col mb-10 mt-10`}>
              {/* <input
                className="border w-[200px] h-[40px] p-2 rounded-md"
                placeholder="Example Input: 12"
                onChange={(e: any) => {
                  if (numberCalon.includes(e.target.value)) {
                    setWarn(true)
                    setVote(e.target.value)
                  } else {
                    setWarn(false)
                    setVote(e.target.value)
                  }
                }}
              />
              {
                !warn ?
                <div className="text-center text-red-500 mt-2">Masukan Tidak Valid</div> : <></>
              } */}
              <button
                onClick={handleVote}
                className={`border mx-auto px-4 py-2 mt-4 rounded-md text-white ${statusCalon? "bg-red-200":  "bg-red-400"}`} disabled={statusCalon}>
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Pemilihan