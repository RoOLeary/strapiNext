import Link from 'next/link'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from 'next-auth/client'
import { useAppContext } from '../src/context/appcontext'
import { useRouter } from 'next/router'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-80%" },
};

let initialState = {
    logo: 'LOGO',
    showNav: false
}


const Nav = () => {
    const ctx = useAppContext();
    const [session, setSession] = useSession();
    const [val, setVal] = useState(initialState.logo); 
    const [showNav, setShowNav] = useState(initialState.showNav);
    const toggleNav = (e) => {
        setShowNav(!showNav);
    }
    const router = useRouter()
    const asPath = router.asPath; 

    // console.log(router);

    const toggleContact = event => {
        event.preventDefault();
        ctx[0].handlers.setModalData({
            title: 'Contact', 
            content: 'Now this is a story, all about how....'
        })
        document.body.classList.toggle('body-modal-open');
        ctx[0].handlers.setIsModalOpen(!ctx[0].state.isModalOpen);
    }

    return(
        <nav className="bg-white relative z-50 sticky top-0 shadow-lg">
        <div className="md:flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-16 justify-between align-center">
            <h1 className="hidden md:flex ml-2 mt-5 justify-start font-bold text-xl font-serif text-gray-800">
                <Link href='/'>
                    Isabel Vaz
                </Link>
            </h1> 
            <div className="relative flex items-center justify-end h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                <button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={(e) => toggleNav(e)}>
                <span className="sr-only">Open main menu</span>
               
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
               
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <h1 className="block md:hidden ml-2 mt-0 justify-start font-bold font-serif text-gray-800">
                    <Link href='/'>
                        Isabel Vaz
                    </Link>
                </h1> 
            </div>
            
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        <Link href='/'>
                            <a className={`${router.pathname === '/' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>Home</a>
                        </Link>
                        <Link href='/about'>
                            <a className={`${router.asPath === '/about' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>About</a>
                        </Link>
                        <Link href='/schedule'>
                            <a className={`${router.pathname === '/schedule' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>Schedule</a>
                        </Link>
                        <Link href='/gallery'>
                            <a className={`${router.pathname === '/gallery' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>Gallery</a>
                        </Link>
                        <Link href='/videos'>
                            <a className={`${router.pathname === '/videos' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>Videos</a>
                        </Link>
                        <Link href='/lessons'>
                            <a className={`${router.pathname === '/lessons' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>Teaching</a>
                        </Link>
                         <Link href='/store'>
                            <a className={`${router.pathname === '/store' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>Store</a>
                        </Link>
                         <Link href='/contact'>
                           <a className={`${router.pathname === '/contact' ? 'bg-gray-800 text-white px-3 py-2 text-sm font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif'}`}>Contact</a>
                        </Link> 
                        {/* <a onClick={toggleContact} className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serifs">Contact</a>
         */}
                        {/* <Link href='/'>
                        {!session ?
                            <a className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif" onClick={() => signIn()}>Sign In</a>
                        :
                            <a className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-serif" onClick={() => signOut()}>Sign Out</a>
                        }
                        </Link>        */}
                    </div>
                </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                </button>

               
                <div className="ml-3 relative">
                <div>
                    <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="http://localhost:1337/uploads/Screenshot_2020_08_11_at_22_58_07_b8a006abf0.png" alt="" />
                    </button>
                </div>
              
                <div className="hidden origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                </div>
                </div>
            </div> */}
            </div>
        </div>

        <div className={`mobileNav ${!showNav ? '' : 'show' }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
                <motion.ul animate={showNav ? "open" : "closed"} variants={variants} exit={toggleNav}>
                    <Link href='/'>
                        <a className={`${router.pathname === '/' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Home</a>
                    </Link>
                    <Link href='/about'>
                        <a className={`${router.pathname === '/about' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>About</a>
                    </Link>
                    <Link href='/videos'>
                        <a className={`${router.pathname === '/videos' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Schedule</a>
                    </Link>
                    <Link href='/gallery'>
                        <a className={`${router.pathname === '/gallery' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Gallery</a>
                    </Link>
                    <Link href='/videos'>
                        <a className={`${router.pathname === '/videos' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Videos</a>
                    </Link>
                    <Link href='/lessons'>
                       <a className={`${router.pathname === '/lessons' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Teaching</a>
                    </Link>
                    <Link href='/store'>
                        <a className={`${router.pathname === '/store' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Store</a>
                    </Link>
                    <Link href='/contact'>
                        <a className={`${router.pathname === '/contact' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Contact</a>
                    </Link>
                     {/* <Link href='/posts'>
                        <a className={`${router.pathname === '/posts' ? 'bg-gray-800 text-white block px-3 py-2 text-base font-serif ' : 'text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-serif'}`}>Posts</a>
                    </Link> */}
                </motion.ul>
            </div>
        </div>
    </nav>
    ); 
}; 

export default Nav; 