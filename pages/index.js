import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Card_temp_2 from '../components/Card_temp_2';
import Login from '../components/Login';

export default function Home() {

  const [toggle,setToggle] = useState(false);
  return (
    <>
      <Head>
        <title>Card</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={toggle?'dark':'light'}>
        <div className='h-[100vh] w-[100vw] flex justify-center ease-linear duration-300 items-center bg-gray-100 dark:bg-slate-900'>
            <Card_temp_2 toggle={toggle} settoggle={setToggle}/>
            {/*comment out the uper one and uncomment the below one*/}

            {/* <Login/> */}
          
        </div>
      </body>
    </>
  )
}
