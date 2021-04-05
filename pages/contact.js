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

export default function Contact() {

    return(
        <Layout>
             <Container>
        <div>
            <Head>
                <title>Isabel Vaz | Cello | Contact Isabel</title>  
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Intro title={'Contact'} />
           
            <div className="w-full h-auto border-black bg-white flex justify-center">
                <div className="w-full md:w-8/12 pt-6 pb-24 relative flex-col px-8">              
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">Would you like to get in touch? Please complete the form below, and a we will reply to you as soon as possible.</p>
                    <br />
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">You can also follow Isabel on Social Media.</p>
                    <Form />
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

