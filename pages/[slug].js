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

// data
import { getPageBySlug, getPage } from '@/lib/api';

// styles

export default function Page({ postData }) {
    const router = useRouter(); 
    const titleRef = useRef(); 
    const ballsRef = useRef(); 
    const blocks = postData.pages[0].flex_content ? postData.pages[0].flex_content : null;
    const [ session, loading ] = useSession()
    const [ flerdle, setFlerdle] = useState(); 
    
    useEffect(() => {
        setGeo();        
    },[])
 
    const setGeo = useCallback(() => {
        setTimeout(() => {
        setFlerdle(ballsRef.current.innerHTML);
        }, 2000);
    }, []);


    useEffect(function () {
        setTimeout(() => {
            titleRef.current.textContent = postData.pages[0].title
        }, 2000); // Update the content of the element after 2seconds 
    }, []);


    return(
        <Layout>
             <Container>
        <div>
            <Head>
                <title>Technoise. {postData.pages[0].title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div>
                <h1>{flerdle ? flerdle : 'NYARF' }</h1>
                {session && <div>
                Signed in as {session.user.name} - {session.id}<br/>
                <img src={session.user.image} />
                <button onClick={() => signOut()}>Sign out</button>
                </div>}
            </div>
            <Intro title={postData.pages[0].title} />
            <div className="title" ref={titleRef}>Original title</div>
            <main>
                <div dangerouslySetInnerHTML={{ __html:postData.pages[0].intro_text }} />
                <div className="container">
                    <h3>{session ? 'Hey ' + session.user.name : ''} Blocks</h3>
                    {blocks ? blocks.map((block, i) => {
                        let fieldGroupNames = block.__typename;
                        let pageObject = {
                            ballsack_title: block['ballsack_title'],
                            ballsack_text: block['ballsack_text'],
                            address: block['address'],
                            telephone: block['telephone'],
                            email: block['email'],
                        }
                        {/* console.log(pageObject['ballsack_text']); */}

                        switch(fieldGroupNames) {
                            case 'ComponentGeneralBallsack':
                                return <Ballsack key={i} title={pageObject['ballsack_title']} text={pageObject['ballsack_text']}/>
                                break;
                            case 'ComponentGeneralContactInfo':
                                return <Contact key={i} address={pageObject['address']} telephone={pageObject['telephone']} email={pageObject['email']} />
                                break;
                            default:
                                // code block
                            }
                    }) : 'LOADING'}
                </div>
                <div ref={ballsRef}>My Balls</div>
                <Link href={`/posts`}>
                    <a>Back to Posts Index</a>
                </Link>
            </main>
        </div>
        </Container>
    </Layout>
    );
}

export async function getStaticPaths(){
    const allPages = await getPageBySlug(); 

    return { 
        paths: allPages.map((page) => `/${page.slug}`) || [],
        fallback: true
    }
}

export async function getStaticProps({ params }){
    const data = await getPage(params.slug); 
    // console.log(data);
    return{
        props: {
            postData: data
        }
    }
}