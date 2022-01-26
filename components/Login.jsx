import Image from "next/image";
import sideimg from '../public/side.jpg';
import styles from '../styles/Home.module.css';


export default function Login() {
    return (
      <div className=" h-[35rem] w-[50rem] m-6 bg-white rounded-2xl shadow-2xl flex">
         <div className=" flex justify-center items-center w-full  h-full relative">
           <Image src={sideimg} alt="login side image"  layout="fill" objectFit="cover" className=" rounded-l-2xl"/>
         </div>

         <div className="flex items-center w-full h-full flex-col justify-between">
           <h1 className={styles.valo}>valorant</h1>

           <div>
            <form className="flex justify-center items-center flex-col">
              <input type="Email" placeholder="Email" className=" focus:border-[#FA4454] m-1 p-3 w-full border-2 border-gray-200 rounded-xl outline-none" />
              <input type="password" placeholder="Password" className=" focus:border-[#FA4454] m-1 p-3 w-full border-2 border-gray-200 rounded-xl outline-none" />
              <button className=" m-1 p-3 mt-5 w-full rounded-xl outline-none bg-[#FA4454] border-2 border-[#FA4454] text-white font-bold hover:bg-white hover:border-2 hover:border-[#FA4454] hover:text-[#FA4454] ease-linear duration-100 animate-bounce">Sign in</button>
            </form>
           </div>

           <div className="p-10 text-gray-400 cursor-pointer">
            Create an Account
           </div>
         </div>
      </div>
    )
  }

  