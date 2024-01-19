import React from 'react'
import Head from 'next/head'
import Overview from './overview/over/components/Overview'

const page = () => {
  return (
    <div>
      <Head>
        <title>Finance</title>
        <meta property="og:title" content="Finance official website" key="title" />
      </Head>
      <Overview />
    </div>
  )
}

export default page