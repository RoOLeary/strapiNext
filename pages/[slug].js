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
    const blocks = postData.pages[0].flex_content ? postData.pages[0].flex_content : null;
    const [ session, loading ] = useSession()
    

    console.log(session);

    return(
        <Layout>
             <Container>
        <div>
            <Head>
                <title>Technoise. {postData.pages[0].title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div>
                {!session && <div>
                Not signed in <br/>
                <button onClick={() => signIn()}>Sign in</button>
                </div>}
                {session && <div>
                Signed in as {session.user.name} <br/>
                <img src={session.user.image} />
                <button onClick={() => signOut()}>Sign out</button>
                </div>}
            </div>
            <Intro title={postData.pages[0].title} />
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
        paths: allPages?.map((page) => `/${page.slug}`) || [],
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