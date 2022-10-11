import Image from 'next/image';
import {Menu} from '../icons';
import Navbar from './Navbar';
import {links} from '../../lib/constants';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import NextLink from 'next/link';

export default function TopNav() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        router.events.on('hashChangeComplete', () => {
            setOpen(false);
        })

        document.onclick = () => setOpen(false);
    }, [])

    return (
        <div className="fixed xl:hidden bg-primary-500 min-h-12 p-3 z-50 w-full" onClick={(ev) => ev.stopPropagation()}>
            <div className="flex justify-between items-center ">
                <NextLink href="/" passHref={true}>
                    <a className="flex items-center">
                        <Image src="/images/person.png" width={30} height={30} className="rounded-[50%]" />
                        <span className="ml-3 text-white text-lg font-bold hover:text-secondary-100 transition-colors" >Aaron Day</span>
                    </a>
                </NextLink>
                <button onClick={() => setOpen(!open)}><Menu className="text-white transition-transform rotate-0 hover:rotate-45" /></button>
            </div>
            <Navbar links={links} className={`mt-5 ${!open && 'hidden'}`} />
        </div>
    );
}