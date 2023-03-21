import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/src/components/navbar.component'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [visible, setVisible] = useState(false)
  const onChangeModal = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <Navbar />
      <div className='container w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold m-6 p-6'>Welcome</h1>
        <Image 
          width={1000}
          height={1000}
          src={'/01.jpg'}  
        />
      </div>
    </div>
  )
}
