import { useEffect, useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router'; 
import { signIn, signOut, useSession } from 'next-auth/client'
import dynamic from "next/dynamic";
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout'
import Container from '@/components/container'
import Form from '@/components/form'
import Intro from '@/components/intro'
import { useForm } from 'react-hook-form';

// styles

export default function Store() {

    return(
        <Layout>
             <Container>
        <div>
            <Head>
                <title>Isabel Vaz | Cello | Store</title>  
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Intro title={'Store'} />
           
            <div className="w-full h-auto border-black bg-white flex justify-center">
                <div className="w-full md:w-8/12 pt-6 pb-24 relative flex-col px-8">              
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">Store coming soon...</p>
                </div>
            </div>
        </div>
    
    </Container>
    <div className="w-full h-auto border-black bg-white flex justify-end">
        <img src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0898-scaled.jpeg" className="relative block w-full h-full object-cover -mt-12" />
        <div className="w-64" style={{ "background": "rgb(167, 188, 187)" }}></div>
    </div>
    </Layout>
    );
}

