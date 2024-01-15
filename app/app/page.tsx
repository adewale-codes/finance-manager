import React from 'react'
import Head from 'next/head'
import Overview from './overview/over/components/Overview'

const page = () => {
  return (
    <div>
      <Head>
        <title>Brytatutor</title>
        <meta property="og:title" content="Brytatutors official website" key="title" />
      </Head>
      <Overview />
    </div>
  )
}

export default page