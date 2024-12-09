import Image from "next/image"

export default function Navbar(){
    return(
        <div className="w-full h-[124px] border-[1px] bg-[#FFFFFF] mt-20 flex">
            <div className="mt-[54px] rounded-[20%] ml-20">
               <Image src='/Logo (1).png' alt="logo" height={13} width={80}/>
            </div>
            <div>
                <div className=" flex w-[300px] h-[30px] mt-[50px] ml-10 rounded-[70px] border-[1px] opacity-[80%] bg-[#ffffff]">
                    <div className="mt-1 pl-4"> <Image src='/search-normal.png' alt="logo" height={20} width={20}/></div>
                    <div className="w-[149px] h-[40px] text-[10px] text-[#596780] font-[-2px] pt-2 pl-2">Search something here</div>
                    <div className="mt-1 pl-16"> <Image src='/filter.png' alt="logo" height={20} width={20}/></div>
                </div>
            </div>

        <button className="flex ml-[46%] gap-4">
    
              <div className="mt-[40px] "> <Image src='/Like.png' alt="like" width={35} height={35}/></div> 
              <div  className="mt-[40px] ">  <Image src='/Notification (5).png' alt="like" width={35} height={35}/></div>
               <div  className="mt-[40px]"> <Image src='/Settings.png' alt="like" width={35} height={35}/></div>
               <div  className="mt-[40px]"> <Image src='/Profil.png' alt="like" width={35} height={35}/></div>
               </button>

        </div>
        
        
        
    )
}
    