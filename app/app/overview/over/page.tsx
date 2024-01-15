import Head from 'next/head'
import Image from "next/image"

export default function Join() {

  return (
    <div>
      <Head>
        <title>Overview | Finance</title>
        <meta property="og:title" content="Create School | Brytatutors" key="title" />
      </Head>
        <div>
            <div className='flex md:flex-row flex-col justify-around items-center md:items-start pt-5'>
                <div className='p-5'>
                    <ul>
                        <li className='text-grays-400 text-xls'>Total Balance</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
