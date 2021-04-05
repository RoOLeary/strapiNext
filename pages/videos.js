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
                    <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                        
                        <div class="w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                            <iframe loading="lazy" title="Página Esquecida" width="100%" height="281" src="https://www.youtube.com/embed/V51TgGHTzt0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>

                        <div class="w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                            <iframe loading="lazy" title="Mazurka - David de Sousa" width="100%" height="281" src="https://www.youtube.com/embed/SVWl5-gvERw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>

                        <div class="w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                            <iframe loading="lazy" title="Nuno Corte-Real - Luar galego, op. 23B/Isabel Vaz, Rachlevsky, RSO" width="100%" height="281" src="https://www.youtube.com/embed/qx4lhbPtYVs?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                         <div class="w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                            <iframe loading="lazy" title="Schubert Quartettsatz" width="100%" height="281" src="https://www.youtube.com/embed/RrQAaTvjMEs?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>

                        <div class="w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                            <iframe loading="lazy" title="Beethoven op.59 n.1 'Allegro'" width="100%" height="281" src="https://www.youtube.com/embed/dJUX-mwsGYg?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>

                        <div class="w-full md:w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                            <iframe loading="lazy" title="Nuno Corte-Real - Luar galego, op. 23B/Isabel Vaz, Rachlevsky, RSO" width="100%" height="281" src="https://www.youtube.com/embed/qx4lhbPtYVs?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>

                    </div>
                    <br /><br />
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

  