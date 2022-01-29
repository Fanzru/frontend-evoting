import { UserType } from "../../types/userCalon";
import Image from 'next/image'
const CardCalon = ({...props}) => {
  
  const dataCalon:  UserType[] = props.data.calon
  return (
      <div>
          <div className=" text-center text-lg mb-2 font-bold mt-2">
            {`Nomor Calon ${props.data.nomor_calon}`}
          </div>
          <div className='w-[300px] h-[250px] flex grid-row-2 p-2 '>
            
            {
              dataCalon?.map((calon,idx)=>{
                return (
                  <div key={idx} className='w-1/2 px-2'>
                    <div className=''>
                      <div className='mb-2'>
                        <Image
                          layout='responsive'
                          src={calon.url_photo}
                          alt="photo calon"
                          width={512}
                          height={512}
                          className="rounded-full"
                        />
                      </div>
                      <div className='text-center'>
                        {calon.name}
                      </div>
                    </div>
                    
                  </div>
                )
              })
            }
          </div>
      </div>
  )
}

export default CardCalon;