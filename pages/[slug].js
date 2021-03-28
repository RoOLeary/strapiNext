import { useEffect, useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router'; 
import { signIn, signOut, useSession } from 'next-auth/client'
import dynamic from "next/dynamic";
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout'
import Ballsack from '@/components/ballsack'
import Contact from '@/components/contact'
import Container from '@/components/container'
import Intro from '@/components/intro'
import AccordionUnit from '@/components/accordion'
import Tabs from '@/components/tabs'
import Form from '@/components/form'
import Slider from '@/components/slider'

// data
import { getAllPagesWithSlug, getPageBySlug } from '@/lib/api';

// styles

export default function Page({ postData }) {
    
    console.log(postData);
    
    const blocks = postData ? postData.pages[0].flex_content : null;
    const title = postData ? postData.pages[0].title : 'Loading'
    const intro_text = postData ? postData.pages[0].intro_text : 'Loading';
    const [ session, loading ] = useSession()


    console.log(session);
   
    return(
        <Layout>
             <Container>
        <div>
            <Head>
                <title>Technoise. {title}</title>  
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div>
                
                {session && <div>
                Signed in as {session.user.name} - {session.id}<br/>
                <img src={session.user.image} />
                <button onClick={() => signOut()}>Sign out</button>
                </div>}
            </div>
             
            <div className="title">{title}</div>
            <main>
                <div dangerouslySetInnerHTML={{ __html:intro_text }} /> 
                 <div className="container">
                     {blocks ? blocks.map((block, i) => {
                        let fieldGroupNames = block.__typename;
                        let pageObject = {
                            ballsack_title: block['ballsack_title'],
                            ballsack_text: block['ballsack_text'],
                            address: block['address'],
                            telephone: block['telephone'],
                            email: block['email'],
                            accordion: block['accordion'],
                            tabs: block['tabunit']
                        }
                         
                        switch(fieldGroupNames) {
                            case 'ComponentGeneralBallsack':
                                return <Ballsack key={i} data={pageObject} />
                                break;
                            case 'ComponentGeneralContactInfo':
                                return <Contact key={i} data={pageObject} />
                                break;
                            case 'ComponentGeneralAccordion':
                                return <AccordionUnit key={i} data={pageObject} />
                                break;
                            case 'ComponentGeneralTabs':
                                return <Tabs key={i} data={pageObject} />
                                break;
                            default:
                                // code block
                            }
                    }) : 'LOADING'} 
                </div> 
                <Slider />
                <Form />
                <Link href={`/posts`}>
                    <a>Back to Posts Index</a>
                </Link>
            </main>
        </div>
        </Container>
    </Layout>
    );
}

export async function getStaticProps({ params }) {
    const data = await getPageBySlug(params.slug)
  
    return {
      props: {
        postData: data
      }
    }
}
  
export async function getStaticPaths() {
    const allPages = await getAllPagesWithSlug()
    return {
      paths: allPages?.map((page) => `/${slug}`) || [],
      fallback: true,
    }
}
  