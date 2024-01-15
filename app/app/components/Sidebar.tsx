"use client"
import React from 'react'
import Link from 'next/link'
import Image from "next/image"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const Sidebar = () => {
  return (
    <div>
        <div className='bg-primary-100 h-full w-60'>
            <div className='py-7'>
                <div className='flex justify-center items-center'>
                    <div className='text-white font-extrabold text-2xl'>CODES<span className='font-medium'>bank</span>.IO</div>
                </div>
                <div className='flex items-center justify-center flex-col h-full'>
                    <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-5 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]'>
                        <li>
                            <Link href="/">
                                <div>
                                    <button className='flex justify-start px-2.5 items-center rounded w-52 h-10 bg-primary-200 gap-5'>
                                        <Image src="/assets/overview.svg" height={24} width={24} alt='overview-icon' />
                                        <div className='font-semibold text-white'>Overview</div>
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <button className='flex justify-start px-2.5 items-center rounded w-52 h-10 gap-5'>
                                        <Image src="/assets/balances.svg" height={24} width={24} alt='balances-icon' />
                                        <div className='font-semibold text-white'>Balances</div>
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <button className='flex justify-start px-2.5 items-center rounded w-52 h-10 gap-5'>
                                        <Image src="/assets/transactions.svg" height={24} width={24} alt='transactions-icon' />
                                        <div className='font-semibold text-white'>Transactions</div>
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <button className='flex justify-start px-2.5 items-center rounded w-52 h-10 gap-5'>
                                        <Image src="/assets/bills.svg" height={24} width={24} alt='bills-icon' />
                                        <div className='font-semibold text-white'>Bills</div>
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <button className='flex justify-start px-2.5 items-center rounded w-52 h-10 gap-5'>
                                        <Image src="/assets/expenses.svg" height={24} width={24} alt='expenses-icon' />
                                        <div className='font-semibold text-white'>Expenses</div>
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <button className='flex justify-start px-2.5 items-center rounded w-52 h-10 gap-5'>
                                        <Image src="/assets/goals.svg" height={24} width={24} alt='goals-icon' />
                                        <div className='font-semibold text-white'>Goals</div>
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <button className='flex justify-start px-2.5 items-center rounded w-52 h-10 gap-5'>
                                        <Image src="/assets/settings.svg" height={24} width={24} alt='settings-icon' />
                                        <div className='font-semibold text-white'>Settings</div>
                                    </button>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='mt-10 flex items-center justify-center'>
                <Link href="/">
                    <div>
                        <button className='flex justify-start px-2.5 bg-secondary-100 items-center rounded w-52 h-10 gap-5'>
                            <Image src="/assets/exit.svg" height={24} width={24} alt='exit-icon' />
                            <div className='font-semibold text-white'>Settings</div>
                        </button>
                    </div>
                </Link>
                </div>
                <div className='border-y border-secondary-200 mt-5 w-full'></div>
                <div className='mt-5 ml-4'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <Image src="/assets/avatar.svg" height={32} width={32} alt='avatar' />
                        </div>
                        <div>
                            <p className='text-white font-semibold'>Adewale Codes</p>
                            <p className='text-secondary-300 text-xs'>View profile</p>
                        </div>
                        <div>
                            <Image src="/assets/options.svg" height={20} width={4} alt='options-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar