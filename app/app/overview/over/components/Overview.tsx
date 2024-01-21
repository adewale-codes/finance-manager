import React from 'react'
import Image from 'next/image'
import {App} from './App'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

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
                        <div className='flex items-center gap-16'>
                            <div className='text-grays-400 text-xl'>Recent Transaction</div>
                            <div className='flex items-center gap-2'>
                                <div className='text-grays-400 text-xs'>View All</div>
                                <div>
                                    <Image src="/assets/right.svg" height={16} width={16} alt='right-icon' />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='h-1/2 py-4 w-80 rounded bg-white pb-11'>
                            <div className="flex mx-3 gap-16">
                                <div className="text-primary-400 font-bold border-b-2 border-primary-400">All</div>
                                <div className="text-grays-500 font-bold">Revenue</div>
                                <div className="text-grays-500 font-bold">Expenses</div>
                            </div>
                            <div className="flex gap-16 items-center border-b border-grays-600 mx-3 mt-5 pb-2">
                                <div className="flex gap-2 items-center">
                                    <Image src="/assets/game.svg" alt="game-icon" width={40} height={40} />
                                    <div>
                                        <div className="text-primary-100 font-semibold">GTR 5</div>
                                        <div className="text-grays-300 text-xs">Gadget & Gear</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-grays-500 font-semibold">$160.00</div>
                                    <div className="text-grays-300 font-xs">17 May 2023</div>
                                </div>
                            </div>
                            <div className="flex gap-[4.5rem] items-center border-b border-grays-600 mx-3 mt-5 pb-2">
                                <div className="flex gap-2 items-center">
                                    <Image src="/assets/shop.svg" alt="game-icon" width={40} height={40} />
                                    <div>
                                        <div className="text-primary-100 font-semibold">Polo Shirt</div>
                                        <div className="text-grays-300 text-xs">XL fashions</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-grays-500 font-semibold">$20.00</div>
                                    <div className="text-grays-300 font-xs">17 May 2023</div>
                                </div>
                            </div>
                            <div className="flex gap-[5rem] items-center border-b border-grays-600 mx-3 mt-5 pb-2">
                                <div className="flex gap-2 items-center">
                                    <Image src="/assets/home.svg" alt="game-icon" width={40} height={40} />
                                    <div>
                                        <div className="text-primary-100 font-semibold">Biriyani</div>
                                        <div className="text-grays-300 text-xs">Hajir Biriyani</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-grays-500 font-semibold">$10.00</div>
                                    <div className="text-grays-300 font-xs">17 May 2023</div>
                                </div>
                            </div>
                            <div className="flex gap-[5rem] items-center border-b border-grays-600 mx-3 mt-5 pb-2">
                                <div className="flex gap-2 items-center">
                                    <Image src="/assets/transport.svg" alt="game-icon" width={40} height={40} />
                                    <div>
                                        <div className="text-primary-100 font-semibold">Taxi Fare</div>
                                        <div className="text-grays-300 text-xs">Uber</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-grays-500 font-semibold">$12.00</div>
                                    <div className="text-grays-300 font-xs">17 May 2023</div>
                                </div>
                            </div>
                            <div className="flex gap-16 items-center mx-3 mt-5 pb-2">
                                <div className="flex gap-2 items-center">
                                    <Image src="/assets/shop.svg" alt="game-icon" width={40} height={40} />
                                    <div>
                                        <div className="text-primary-100 font-semibold">Keyboard</div>
                                        <div className="text-grays-300 text-xs">Gadget & Gear</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-grays-500 font-semibold">$22.00</div>
                                    <div className="text-grays-300 font-xs">17 May 2023</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="pt-5 w-full">
                <ul>
                    <li>
                        <div>
                            <div className='text-grays-400 text-xl'>Statistics</div>
                        </div>
                            <div className="bg-white h-1/2 p-5 mr-5 rounded">
                                <div className="pb-5">
                                    <div className="text-primary-100 font-semibold ">Weekly Comparison</div>
                                </div>
                                <div>
                                    <App  />
                                </div>
                            </div>
                    </li>
                    <li className="pt-5">
                        <div className="flex justify-between mr-5 items-center">
                            <div className='text-grays-400 text-xl'>Expenses Breakdown</div>
                            <div className='text-grays-300 text-xs'>*Compare to last month</div>
                        </div>
                        <div className="bg-white h-1/2 p-5 mr-5 rounded">
                            <div>
                                <div className="flex gap-14 items-center border-b border-gray-200">
                                    <div>
                                        <div className="flex gap-5 items-center border-r border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <Image src="/assets/n-housing.svg" alt="housing logo" width={40} height={56} />
                                                </div>
                                                <div>
                                                    <div className="text-grays-400 font-xs">Housing</div>
                                                    <div className="text-primary-100 font-bold">$250.00</div>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="text-grays-300 font-xs">15%*</div>
                                                        <div>
                                                            <Image src="/assets/up.svg" alt="upp-arrow" width={16} height={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src="/assets/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="flex gap-5 items-center border-r border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <Image src="/assets/n-food.svg" alt="food logo" width={40} height={56} />
                                                </div>
                                                <div>
                                                    <div className="text-grays-400 font-xs">Food</div>
                                                    <div className="text-primary-100 font-bold">$350.00</div>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="text-grays-300 font-xs">08%*</div>
                                                        <div>
                                                            <Image src="/assets/down.svg" alt="upp-arrow" width={16} height={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src="/assets/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="flex gap-5 items-center">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <Image src="/assets/n-transportation.svg" alt="housing logo" width={40} height={56} />
                                                </div>
                                                <div>
                                                    <div className="text-grays-400 font-xs">Transportation</div>
                                                    <div className="text-primary-100 font-bold">$50.00</div>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="text-grays-300 font-xs">12%*</div>
                                                        <div>
                                                            <Image src="/assets/down.svg" alt="upp-arrow" width={16} height={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src="/assets/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-14 items-center border-b border-gray-200">
                                    <div>
                                        <div className="flex gap-5 items-center border-r border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <Image src="/assets/n-housing.svg" alt="housing logo" width={40} height={56} />
                                                </div>
                                                <div>
                                                    <div className="text-grays-400 font-xs">Housing</div>
                                                    <div className="text-primary-100 font-bold">$250.00</div>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="text-grays-300 font-xs">15%*</div>
                                                        <div>
                                                            <Image src="/assets/up.svg" alt="upp-arrow" width={16} height={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src="/assets/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="flex gap-5 items-center border-r border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <Image src="/assets/n-food.svg" alt="food logo" width={40} height={56} />
                                                </div>
                                                <div>
                                                    <div className="text-grays-400 font-xs">Food</div>
                                                    <div className="text-primary-100 font-bold">$350.00</div>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="text-grays-300 font-xs">08%*</div>
                                                        <div>
                                                            <Image src="/assets/down.svg" alt="upp-arrow" width={16} height={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src="/assets/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="flex gap-5 items-center">
                                            <div className="flex gap-2 items-center">
                                                <div>
                                                    <Image src="/assets/n-transportation.svg" alt="housing logo" width={40} height={56} />
                                                </div>
                                                <div>
                                                    <div className="text-grays-400 font-xs">Transportation</div>
                                                    <div className="text-primary-100 font-bold">$50.00</div>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="text-grays-300 font-xs">12%*</div>
                                                        <div>
                                                            <Image src="/assets/down.svg" alt="upp-arrow" width={16} height={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src="/assets/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Overview