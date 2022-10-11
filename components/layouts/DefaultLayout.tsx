import React, {PropsWithChildren} from 'react';
import Image from 'next/image';
import Navbar from '../navs/Navbar';
import DefaultLink from '../navs/Link';
import {links} from '../../lib/constants';
import Link from 'next/link';
import {Menu} from '../icons';
import TopNav from '../navs/TopNav';

export default function DefaultLayout({children, mainClass, footerClass}: PropsWithChildren<{mainClass?: string, footerClass?: string}>) {
    return (
        <div className="min-h-screen flex flex-row bg-primary-600 relative">
            <Image src="/images/home-bg.jpg" alt="Learn more call to action" layout="fill" objectFit="cover" />
            <div className="min-h-full top-0 bg-gradient-to-b from-[rgba(20,35,31,.9)] to-primary-600 absolute w-full" ></div>
            <TopNav />
            <aside className="fixed z-10 shadow-lg top-0 z-1 w-1/6 h-screen bg-gradient-to-r from-primary-500 to-primary-400 hidden xl:flex flex-col justify-between">
                <div className="flex justify-center p-4 bg-primary-500" >
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/images/person.png" width={150} height={152} className="rounded-[50%]" />
                        <span className="text-white text-lg font-bold hover:text-secondary-100 transition-colors" >Aaron Day</span>
                        <span className="text-gray-400 text-secondary-50">Full-stack Developer</span>
                    </div>
                </div>
                <nav className="flex justify-center px-4 relative bottom-10 text-white transition-colors h-max">
                    <Navbar links={links} />
                </nav>

                <div className="text-white text-sm text-center justify-self-end relative bottom-5">
                    Copyrights &copy; {new Date().getFullYear()}<br />
                    Created by <DefaultLink href="/">Sashe Vuchkov</DefaultLink>
                </div>
            </aside>

            <div className="mt-20 xl:mt-0 w-full xl:w-4/6 relative xl:left-[17%]">
                <main className={mainClass}>
                    {children}
                </main>
                <footer className={`text-white flex flex-wrap justify-center bg-primary-400 py-7 text-sm text-opacity-80 mt-20 shadow-lg ${footerClass}`}>
                    <div className="inline">
                        <DefaultLink href="/" className="mr-2">Terms</DefaultLink>
                        <span>|</span>
                        <DefaultLink href="/" className="mx-2">Privacy Policy</DefaultLink>
                        <span>|</span>
                        <DefaultLink href="/" className="ml-2">Disclosure</DefaultLink>
                    </div>
                </footer>
            </div>
        </div>
    );
}