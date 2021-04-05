import { useEffect, useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router'; 
import { signIn, signOut, useSession } from 'next-auth/client'
import dynamic from "next/dynamic";
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout'
import Contact from '@/components/contact'
import Container from '@/components/container'
import Intro from '@/components/intro'
import { motion } from 'framer-motion';
import { useAppContext } from '../src/context/appcontext'
// data
// styles

export default function Videos() {
    const [ session, loading ] = useSession()
    const ctx = useAppContext();
  
    const toggleImageModal = event => {
        event.preventDefault();
        ctx[0].handlers.setModalData({
            title: 'Image Modal',
            content: '...my life got flipped, turned upside down...',
            image: event.target.getAttribute('href')
        })
        document.body.classList.toggle('body-modal-open');
        ctx[0].handlers.setIsModalOpen(!ctx[0].state.isModalOpen);
    }

    return(
        <Layout>
             <Container>
        <div>
            <Head>
                <title>Isabel Vaz | Cello | Videos</title>  
                <link rel='icon' href='/favicon.ico' />
            </Head>
             
            <Intro title={'Videos'} />
            <main>
                <motion.div key={1} initial="pageInitial" animate="pageAnimate" transition={{ duration: .25 }} variants={{
                    pageInitial: {
                    opacity: 0,
                    y: 150,
                    },
                    pageAnimate: {
                    opacity: 1,
                    y: 0,
                    },
                    
                }}>
                <div className="mb-28">
                    <svg className="Hero__image-grid anim-hero" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590.91 632.66">
                        <defs>
                            <clipPath id="heroclip1">
                                <rect className="hero__swipe-1" id="heroclip1Rect" x="101.31" y="51.24" width="488.79" height="221.87" fill="#fff" data-svg-origin="590.1000061035156 162.17499923706055" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            </clipPath>

                            <clipPath id="heroclip2">
                                <rect className="hero__swipe-2" id="heroclip1Rect" x="195.36" y="293.94" width="292.4" height="268.6" fill="#fff" data-svg-origin="487.75999450683594 428.24000549316406" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            </clipPath>

                            <clipPath id="heroclip3">
                                <rect className="hero__swipe-3" id="heroclip3Rect" x="1.73" y="233.41" width="174.53" height="162.61" fill="#fff" data-svg-origin="176.25999879837036 314.71500396728516" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            </clipPath>

                            <clipPath id="heroclip4">
                                <rect className="hero__swipe-4" id="heroclip4Rect" x="100.03" y="405.79" width="75.83" height="73.12" fill="#fff" data-svg-origin="175.86000061035156 442.3500099182129" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            </clipPath>

                        </defs>
                        <g className="fouc fouc--hero" opacity="0" data-svg-origin="591 314.5249938964844" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px", "opacity": "1"}}>
                            <circle className="hero__circle" cx="90.18" cy="79.56" r="50" fill="#dae1e2" data-svg-origin="90.18000030517578 79.55999755859375" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px", "opacity": "1"}}></circle>
                            <circle className="hero__circle" cx="488.39" cy="563.49" r="30" fill="#3e9fe6" data-svg-origin="488.3900146484375 563.489990234375" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px", "opacity": "1"}}></circle>

                            <rect className="hero__swipe-1" x="102" y="52" width="488" height="220" fill="#23d8a0" data-svg-origin="590 162" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            <rect className="hero__swipe-2" x="196" y="294" width="292" height="268" fill="#FAFAFA" data-svg-origin="488 428" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            <rect className="hero__swipe-3" x="2" y="234" width="173" height="162" fill="#FAFAFA" data-svg-origin="175 315" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            <rect className="hero__swipe-4" x="101" y="406" width="75" height="73" fill="#23d8a0" data-svg-origin="176 442.5" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>
                            <rect className="hero__swipe-5" x="101" y="406" width="75" height="73" fill="#23d8a0" data-svg-origin="176 442.5" transform="matrix(1,0,0,1,0,0)" style={{ "transformOrigin": "0px 0px"}}></rect>

                            <a onClick={toggleImageModal}>
                                <image clipPath="url(#heroclip1)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero1.jpg?mtime=20210107055409&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="101" y="51" width="490" height="223"></image>
                            </a>
                            <Link href="/" to="/">
                            <image clipPath="url(#heroclip2)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero2.jpg?mtime=20210107055410&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="195" y="293" width="294" height="270"></image>
                            </Link>
                            <a onClick={toggleImageModal}>
                                <image clipPath="url(#heroclip3)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero3.jpg?mtime=20210107055411&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="1" y="233" width="176" height="164"></image>
                            </a>
                            <image clipPath="url(#heroclip4)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero4.jpg?mtime=20210107055413&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="99" y="404" width="78" height="76"></image>
                           
                            <image clipPath="url(#heroclip5)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero4.jpg?mtime=20210107055413&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="25" y="490" width="160" height="80"></image>
                            
                        </g>
                    </svg>
                </div>
                </motion.div>
            </main>
            </div>
        </Container>
        <div className="relative sm:-mt-12 mt-24 px-24 py-24 flex items-center" style={{ "background": "#a7bcbb" }}>
            <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{"height": "80px", "transform": "translateZ(0)"}} >
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon style={{ "fill": "#a7bcbb" }} className="" points="2560 0 2560 100 0 100"></polygon></svg>
                </div>
            <div className="hidden md:block w-3/12"></div>
            <div className="flex-1 relative">
                <div className="font-serif text-white opacity-75 text-base md:text-xl max-w-2xl leading-loose">
                    <p>Isabel Vaz was born in Lisbon, Portugal, and started playing the cello by the age of seven. Isabel lived and studied in Lisbon until 2007, the year she moved to The Netherlands. She completed her bachelor and masters degrees at the Conservatory of Amsterdam with Dmitry Ferschtman. During her studies she did two exchange semesters, one in Prague (HAMU) and the other one in New York (Manhattan School of Music).</p>
                </div>
                <span className="absolute top-0 left-0 w-4 h-full bg-white opacity-50 -ml-20"></span>
            </div>
        </div>
    </Layout>
    );
}

  