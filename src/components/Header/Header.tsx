import Button from "../Button/button";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import Image from "next/image";
import { MdOutlineContactMail } from "react-icons/md";
import useStore from '../../utils/stateSite';
import iconAbout from '@/public/icons/icons8-about-50 (1).png';
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { isMobile } from "react-device-detect";
// import { pixelContactContact } from "@/utils/pixelFaceook";
const Header = ({ handleClick, isHeader, onClickFirst, onClickSecond, second, first, isContact, Contractfirst, isHome,onClickPC }: any) => {


    return (
        <div>
            {isMobile? (
                <div>
                    <div className="flex justify-between items-center text-xl pt-4 border-b border-gray-900 px-10 w-full bg-black z-50 top-0 right-0 ">
                        <Link href={'/home'}>
                            <h1 className="text-white font-bold font-league-spartan py-3 cursor-pointer">NEK...</h1>
                        </Link>

                        <div>
                            {isHeader ? (
                                <div>
                                    <div className="h-screen flex flex-col top-0 right-0 bg-black border-l border-gray-900 z-50 p-2 transition-all px-4 py-4 fixed ">
                                        <div className="flex w-full ">
                                            <RiMenuFold4Fill className="text-primaryColor text-3xl" onClick={handleClick} />
                                        </div>
                                        {isContact ?
                                           
                                                 <div className="flex gap-3 flex-col mt-4">
                                                 <button className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl" onClick={onClickFirst}>
                                                     <GrServices className="text-white" /> <a href="#servico" className="text-white">{first}</a>
                                                 </button>
                                                 <button className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl" onClick={onClickSecond}>
                                                     <Image src={iconAbout} alt="" className='w-5 text-white' />
                                                     <a href="#about" className="text-white">{second}</a>
                                                 </button>
                                                 <Link href={'/contact'}>
                                                     <button onClick={handleClick} className="flex items-center gap-2 bg-secondaryColor pl-5 py-2 rounded-xl" >
                                                         <MdOutlineContactMail className="text-white" />   <p className="text-white">Entrar em contato</p>
                                                         <span className="relative flex h-3 w-3 right-1 bottom-5">
                                                             <span className="animate-ping absolute left-2 inline-flex h-full w-full rounded-full bg-primaryColor opacity-75"></span>
                                                             <span className="relative inline-flex left-2 rounded-full h-3 w-3 bg-primaryColor "></span>
                                                         </span>
                                                     </button>
                                                 </Link>
                                             </div> : <Link href={'/home'}>
                                                <button className="flex items-center gap-2 bg-secondaryColor justify-center py-2 rounded-xl w-64 mt-4" onClick={onClickFirst} >
                                                    <IoHome className="text-white" /> <a href="#servico" className="text-white">{Contractfirst}</a>
                                                </button> </Link>  
                                           }

                                    </div>

                                    <div className="m-0 p-0 fixed bg-black z-40 w-full inset-0 bg-opacity-70" onClick={handleClick}></div>
                                </div>
                            ) : (
                                <div className="transition-all">
                                    <RiMenuUnfold4Fill className="text-primaryColor text-3xl" onClick={handleClick} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (

                <div className="flex justify-between items-center text-xl pt-4 border-b border-gray-900 py-3 px-56">
                    <Link href={'/home'}>
                        <h1 className="text-white font-bold font-league-spartan py-3 cursor-pointer">NEK.</h1>
                    </Link>
                    <div className="flex gap-6">
                        <button className="hover:bg-gray-900 px-4 rounded-3xl text-white " onClick={onClickPC}>{first}</button>
                        <button onClick={onClickSecond} className="hover:bg-gray-900 px-4 rounded-3xl text-white ">{second}</button>
                        {isHome && <Link href={'/home'}>
                        <button type="button" className={` bg-secondaryColor text-white px-8 rounded-3xl max-md:text-lg py-2 cursor-pointer `}  >
                            Home
                        </button>
                    </Link>}
                    </div>

                    {isContact && <Link href={'/contact'}>
                        <button type="button" className={` bg-primaryColor text-black px-8 rounded-3xl max-md:text-lg py-2 cursor-pointer`}  >
                            Contato
                        </button>
                    </Link>}
                </div>


            )}
        </div>
    );
}

export default Header;
