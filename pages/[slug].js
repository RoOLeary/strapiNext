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
             
            {/* <div className="title">{title}</div> */}
            <div className="w-full flex items-center justify-start relative">
                <div className="w-auto md:w-3/12"></div>

                <div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">

                    <a href="#" className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-12 md:-ml-24">
                        <h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">About</h3>
                        
                    </a>

                    <img src="http://staging.algarvemusicseries.com/wp-content/uploads/2019/11/classical3.jpeg" className="absolute top-0 left-0 block w-full h-full object-cover" />

                </div>

                <div className="w-1/12 absolute top-0 right-0 h-full bg-gray-800"></div>
            
            </div>
            <div className="w-full h-auto border-black bg-white flex justify-center">
                <div className="w-full md:w-8/12 pt-6 pb-24 relative flex-col px-8">
                                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas volutpat diam, et porta leo faucibus id. Nunc vel auctor eros. Suspendisse consectetur ante dui, in finibus dolor eleifend sit amet. Ut accumsan diam sit amet lorem lacinia porttitor. Duis ullamcorper ante et lacinia consectetur. Praesent varius leo sed interdum ullamcorper. Vestibulum fermentum luctus nulla at tempus. Quisque id aliquam elit.</p>



                    <div style={{ "height":" 40px"}} aria-hidden="true" className="wp-block-spacer"></div>



                    <figure className="wp-block-image align-left">
                        <img loading="lazy" width="1024" height="576" src="http://staging.algarvemusicseries.com/wp-content/uploads/2019/11/cello-1024x576.jpeg" alt="" className="wp-image-93" srcSet="http://staging.algarvemusicseries.com/wp-content/uploads/2019/11/cello-1024x576.jpeg 1024w, http://staging.algarvemusicseries.com/wp-content/uploads/2019/11/cello-300x169.jpeg 300w, http://staging.algarvemusicseries.com/wp-content/uploads/2019/11/cello-768x432.jpeg 768w, http://staging.algarvemusicseries.com/wp-content/uploads/2019/11/cello.jpeg 1600w" sizes="(max-width: 1024px) 100vw, 1024px" />
                    </figure>



                    <div style={{ "height":" 40px"}} aria-hidden="true" className="wp-block-spacer"></div>



                    <p>Phasellus quis enim eu leo porttitor iaculis. Ut id lorem sit amet lacus feugiat vulputate sit amet in nisl. Fusce molestie turpis a mauris maximus vulputate. Ut id pretium lorem. Mauris volutpat lectus vitae porttitor egestas. Suspendisse nec nulla molestie, convallis ipsum at, tempus nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sit amet nibh sapien. Maecenas nec condimentum magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ullamcorper porttitor egestas. Ut vel rutrum libero.</p>



                    <div style={{ "height":" 40px"}} aria-hidden="true" className="wp-block-spacer"></div>



                    <blockquote className="wp-block-quote"><p>What an incredible event!</p><cite>An attendee</cite></blockquote>
                  
            </div>
        </div>
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
                
                <div className="w-full h-auto border-black bg-white flex justify-end">
                    <img src="http://staging.algarvemusicseries.com/wp-content/uploads/2019/11/music.jpeg" className="relative block w-full h-full object-cover -mt-12" />
                    <div className="w-64 bg-gray-800"></div>
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
  