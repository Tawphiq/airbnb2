import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen items-center py-2'>
      <Head>
        <title>Stunning AirBnB</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Stunning AirBnB</h1>
    </div>
  )
}

export default page