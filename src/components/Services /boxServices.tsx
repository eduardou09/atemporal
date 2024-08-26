import { IServiceBox } from "@/interfaces/componets";

import { FaCheck } from "react-icons/fa6";
import Button from "../Button/button";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";

const ServiceBox = ({ service, subtitleService, photo, stages, widthImg }: IServiceBox) => {
    return (
        <div className='flex flex-col px-16 py-8 pt-0  max-lg:px-3'>
            
            <div className="flex max-md:flex-col justify-between items-center py-8 max-md:py-1">
                <div className="w-2/4 max-md:w-full ">
                    <div className="mt-7 max-md:flex  max-md:items-center max-md:text-start max-md:flex-col ">
                        <div className=" text-white font-semibold text-3xl max-md:text-2xl  items-center max-md:px-6">{service}</div>
                        <div className="text-gray-200 max-md:text-center mt-5 text-xl max-md:text-lg mb-3 w-4/5 max-md:px-6 max-md:w-full ">{subtitleService}</div>

                            <div className="  w-20  h-[1px]  mb-7 bg-primaryColor"/>

                        <div className="flex flex-col gap-3 mb-7 max-md:w-full max-md:px-6 ">
                            {stages.map((item: any) => (
                                <div className="flex gap-2 items-center" key={item}>
                                 {isMobile ? "" :<div className=" flex justify-center items-center rounded-full bg-primaryColor w-4 h-4 text-black"/> }   
                                      
                                  
                                    <div key={item} className="flex items-center justify-center text-white">

                                        {item}
                                    </div>
                                </div>

                            ))}</div>
                        <div className="flex max-md:justify-center">
                            <Link href={'/contact'}>
                                <Button title="Entrar em contato" width="w-72" padding="p-2" />
                            </Link>
                         
                        </div>
                      


                    </div>
                </div>
                <div className="flex w-2/4 max-lg:hidden max-md:w-0 ">
                    <div className="flex items-center  max-md:justify-center">
                        <Image src={photo} alt="Imagem Hero" className={` p-1 rounded-2xl text-black ${widthImg} `} />
                    </div>
                </div>
            </div>

        </div >
    );
}

export default ServiceBox;