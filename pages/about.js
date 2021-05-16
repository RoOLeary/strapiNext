import { useEffect, useCallback, useRef, useState, useAppContext } from 'react';
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

export default function About({ postData }) {
    
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
                <title>Isabel Vaz | Cello | About Isabel</title>  
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Intro title={'About Isabel'} />
           
            <div className="w-full h-auto border-black bg-white flex justify-center">
                <div className="w-full md:w-8/12 pt-6 pb-24 relative flex-col px-8">              
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">Isabel Vaz was born in Lisbon, Portugal, and started playing the cello by the age of seven. Isabel lived and studied in Lisbon until 2007, the year she moved to The Netherlands. She completed her bachelor and masters degrees at the Conservatory of Amsterdam with Dmitry Ferschtman. During her studies she did two exchange semesters, one in Prague (HAMU) and the other one in New York (Manhattan School of Music).</p>
                    <span className="hidden md:block absolute top-0 right-0 w-48 h-4 bg-blue-900 -mr-24 mt-56 "></span>
                    <div style={{ "height":" 40px"}} aria-hidden="true"></div>
                    <figure className="wp-block-image align-left">
                        <img loading="lazy" width="1024" height="576" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0893.jpeg" sizes="(max-width: 1024px) 100vw, 1024px" />
                    </figure>
                    <div style={{ "height":" 40px"}} aria-hidden="true"></div>
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">Isabel Vaz was born in Lisbon, Portugal, and started playing the cello by the age of seven. Isabel lived and studied in Lisbon until 2007, the year she moved to The Netherlands. She completed her bachelor and masters degrees at the Conservatory of Amsterdam with Dmitry Ferschtman. During her studies she did two exchange semesters, one in Prague (HAMU) and the other one in New York (Manhattan School of Music).
                    </p>
                    <div style={{ "height":" 40px"}} aria-hidden="true"></div>
                    <span className="hidden md:block absolute top-2 left-0 w-48 h-4 bg-blue-900 -ml-28 -mt-4"></span>
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">Isabel was the cellist of Quartetto Indaco between 2013 and 2015, having performed recitals in several halls and festivals in Italy and all over Europe. The quartet studied under the guidance of Oliver Wille in the string quartet program at the Hannover Hochschule.</p>
                    <br />
                    <figure>
                    <img loading="lazy" width="100%" height="350" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0898-scaled.jpeg " sizes="(max-width: 1024px) 100vw, 1024px" />
                    </figure>
                    <br />
                
                  
                    <br />
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">Isabel is currently based in Amsterdam, The Netherlands, where she is actively working as a chamber musician. In 2015 she was appointed a tutti cellist at the Noord Nederlands Orkest (part-time 50%).
                        Isabel has a duo with the concert pianist Vasco Dantas, with whom she also shares the artistic coordination of Algarve Music Series, an International Chamber Music Festival in Algarve. Its 5th edition will take place in Algarve in October 2020.
                    </p>
                    <br />
                    <figure>
                    <img loading="lazy" width="100%" height="350" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0882-scaled.jpeg" sizes="(max-width: 1024px) 100vw, 1024px" />
                    </figure>
                    <br />
                    <p className="font-serif text-gray-600 text-base md:text-xl leading-loose">During the last few seasons Isabel has been making several solo appearances with various european orchestras such as Orquestra Metropolitana de Lisboa, Orquestra de Cascais e Oeiras, Kremlin Chamber Orchestra, Sonor Ensemble, the Zagreb Soloists, among others.</p>
            </div>
        </div>
    </div>
    
    </Container>
    <div className="w-full h-auto border-black bg-white flex justify-end">
        <img src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0894.jpeg" className="relative block w-full h-full object-cover -mt-12" />
        <div className="w-64" style={{ "background": "rgb(167, 188, 187)" }}></div>
    </div>
    </Layout>
    );
}

export async function getStaticProps({ params }) {
    const data = await getPageBySlug('about')
  
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
  