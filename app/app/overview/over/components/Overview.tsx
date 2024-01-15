import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div>
        <div className='flex md:flex-row flex-col justify-around items-center md:items-start pt-5'>
            <div className=''>
                <ul>
                    <li className='text-grays-400 text-xls'>Total Balance</li>
                    <li className='mt-2'>
                        <div className='h-52 w-80 bg-white p-5 rounded drop-shadow'>
                            <div className='flex items-center gap-20'>
                                <div className='font-extrabold text-xl'>$240,399</div>
                                <div className='font-medium text-sm text-grays-500'>My Account</div>
                            </div>
                            <div className='py-2'>
                                <hr className='border-grays-600 w-full' />
                            </div>
                            <div className='bg-primary-400 h-28 w-64 rounded p-4'>
                                <div>
                                    <div className='flex items-center gap-20'>
                                        <div className='text-primary-500 font-medium text-sm'>Account type</div>
                                        <div>
                                            <Image src="/assets/mastercard.svg" width={48} height={28} alt='mastercard-logo' />
                                        </div>
                                    </div>
                                    <div className='font-bold text-white'>Credit Card</div>
                                    <div className='flex items-center gap-20'>
                                        <div className='text-primary-500 font-medium text-sm'>**** **** **** 2598</div>
                                        <div>
                                            <Image src="/assets/gone.svg" width={24} height={24} alt='gone-icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul>
                    <li className='text-grays-400 text-xls'>Goals</li>
                    <li className='mt-2'>
                        <div className='h-52 w-80 bg-white p-5 rounded drop-shadow'>
                            <div className='flex items-center gap-14'>
                                <div className='flex items-center gap-2'>
                                    <div className='font-extrabold text-xl'>$20,000</div>
                                    <div>
                                        <Image src="/assets/edit.svg" width={32} height={32} alt='edit-icon' />
                                    </div>
                                </div>
                                <div className='font-medium text-sm text-grays-500'>May, 2023</div>
                            </div>
                            <div className='py-2'>
                                <hr className='border-grays-600 w-full' />
                            </div>
                            <div>
                                <div className='flex gap-8 items-center'>
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <Image src="/assets/award.svg" width={24} height={24} alt='award-icon' />
                                            </div>
                                            <div className='font-xs text-primary-600'>Target</div>
                                        </div>
                                        <div className='font-bold ml-8'>$12,500</div>
                                    </div>
                                    <div>
                                        <Image src="/assets/graph.svg" width={128} height={64} alt='graph' />
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <Image src="/assets/target.svg" width={24} height={24} alt='target-icon' />
                                        </div>
                                        <div className='font-xs text-primary-600'>Month Target</div>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <div className='text-grays-700 font-medium text-xs'>$0</div>
                                        <div className='font-semibold'>12K</div>
                                        <div className='text-grays-700 font-medium text-xs'>$20k</div>
                                    </div>
                                </div>
                                <div className='flex gap-8 items-center'>
                                    <div className='font-bold ml-8'>$20,000</div>
                                    <div className='font-medium text-xs'>Target vs Achievement</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul>
                    <li className=''>
                        <div className='flex items-center gap-32'>
                            <div className='text-grays-400 text-xls'>Upcoming Bill</div>
                            <div className='flex items-center gap-2'>
                                <div className='text-grays-400 text-xs'>View All</div>
                                <div>
                                    <Image src="/assets/right.svg" height={16} width={16} alt='right-icon' />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='mt-2'>
                        <div className='h-52 w-80 bg-white p-5 rounded drop-shadow'>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-2'>
                                    <div className='h-16 flex items-center justify-center p-2 w-11 rounded bg-grays-800'>
                                        <div>
                                            <div className='text-grays-900 font-medium text-xs'>May</div>
                                            <div className='font-extrabold text-xl'>15</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-grays-900 font-medium'>Figma</div>
                                    <div className='text-grays-500 font-bold '>Figma - Monthly</div>
                                    <div className='text-grays-300 text-xs'>Last Charge - 14 May, 2022</div>
                                </div>
                                <div className='border-2 border-grays-200 rounded h-10 w-14 text-grays-500 font-bold p-2'>$150</div>
                            </div>
                            <div className='py-2'>
                                <hr className='border-grays-600 w-full' />
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-2'>
                                    <div className='h-16 flex items-center justify-center p-2 w-11 rounded bg-grays-800'>
                                        <div>
                                            <div className='text-grays-900 font-medium text-xs'>Jun</div>
                                            <div className='font-extrabold text-xl'>16</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=''>
                                        <Image src="/assets/adobe.svg" width={60} height={16} alt='adobe logo' />
                                    </div>
                                    <div className='text-grays-500 font-bold '>Adobe - Yearly</div>
                                    <div className='text-grays-300 text-xs'>Last Charge - 17 Jun, 2023</div>
                                </div>
                                <div className='border-2 border-grays-200 rounded h-10 w-14 text-grays-500 font-bold p-2'>$559</div>
                            </div>
                            <div className='py-2'>
                                <hr className='border-grays-600 w-full' />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex md:flex-row flex-col justify-around items-center md:items-start pt-5'>
            <div className='p-5'>
                <div>
                    <div>
                        <div className='flex items-center gap-32'>
                            <div className='text-grays-400 text-xls'>Recent Transaction</div>
                            <div className='flex items-center gap-2'>
                                <div className='text-grays-400 text-xs'>View All</div>
                                <div>
                                    <Image src="/assets/right.svg" height={16} width={16} alt='right-icon' />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='h-80 w-80 rounded bg-white'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview