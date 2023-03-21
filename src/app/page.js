import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'

const page = () => {
  return (
    <div className=''>
      <Head>
        <title>Stunning AirBnB</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      
    </div>
  )
}

export default page