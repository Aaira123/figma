import Image from "next/image"


export default function Header(){
    return(
        
<div className="w-full h-[141px] p-2 bg-[#FFFFFF] justify-between flex">
     <div className="w-[590px] h-[40px] gap-[15px] flex mt-8 ">
        <div className="mt-2 ml-3">
            <Image src='/command.png' alt="logo" width={28} height={10}/>
        </div>
            <h1 className="w-[600px] h-[40px] text-[#1A202C] font-bold text-[30px]">
            Wireframe Dashboard - Home Rent
            </h1>

     </div>
     
     <div className="w-[236px] h-[25px] flex p-2 mt-8">
        <div className="text-[#666666] w-[130px] h-[25px]">Last update:</div>
        <div className="w-[150px] h-[25px] font-semibold text-[16px] mr-">8 August 2022</div>

     </div>


</div>

    )
}