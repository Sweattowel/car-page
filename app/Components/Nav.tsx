"use client";

import Link from "next/link";
import { useState } from "react"

const links = [
    {
        picture: 'https://www.svgrepo.com/show/530571/conversation.svg',
        Text: 'BUY',
        href: '/Buy'
    },
    {
        picture: 'https://www.svgrepo.com/show/527243/money-bag.svg',
        Text: 'SELL',
        href: '/Sell'
    },
    {
        picture: 'https://www.svgrepo.com/show/530571/conversation.svg',
        Text: 'LOGIN',
        href: '/Login'
    },
    {
        picture: 'https://www.svgrepo.com/show/27703/customer-service.svg',
        Text: 'CONTACT',
        href: '/Contact'
    },
]

const notifications = [
    {
        level: 3,
        message: 'Expired deal'
    },
    {
        level: 1,
        message: 'New Sale on Mercedes'
    },
    {
        level: 2,
        message: 'They hit the pentagon'
    },
]


export default function Nav() {
    const [seeNotifications, setSeeNotifications] = useState(false)

    return (
        <main className="w-full h-[6rem] justify-evenly items-center flex">
            <img className="h-[6rem]" src="https://www.svgrepo.com/show/25407/car.svg" alt="PageLogo" />
            <ul className="flex w-[50%] h-full items-center justify-evenly">
                {links.map((link:any, index:number) => (
                    <li key={index} className="flex h-[3rem] w-[12rem] items-center justify-evenly w-[100%] hover:cursor-pointer border-b-2 hover:border-blue-600 rounded-b">
                        <Link href={link.href}>
                            <h2>
                                {link.Text}
                            </h2>
                        </Link>

                    </li>
                ))}
            </ul>
            <section>
                <img onClick={() => setSeeNotifications(!seeNotifications)} className="h-[3rem] hover:cursor-pointer border-b-2 hover:border-blue-600 rounded-b" src="https://www.svgrepo.com/show/532089/bell-alt.svg" alt="bellIcon" />
                <ul className={`${!seeNotifications ? `opacity-0` : 'opacity-100'} mt-8 flex flex-col justify-spaced-apart fixed right-10 bg-white z-10 mt-1 divide-y shadow-inner transition-opacity fade-out duration-2000`}>
                    {notifications.map((notification: any, index:number ) => (
                        <div key={index} className="p-6">
                            {notification.level === 3 ? "!!! " : notification.level === 2 ? "!!  " : "!   "}{notification.message}
                        </div>
                    ))}
                </ul>
            </section>
        </main>
    )
}

