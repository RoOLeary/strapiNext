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

export default function Gallery({ postData }) {
    
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
             
            <Intro title={'Gallery'}/>
            <main>
                <div>
                    <svg className="Hero__image-grid anim-hero" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590.91 632.66">
                        <defs>
                            <clipPath id="heroclip1">
                                <rect className="hero__swipe-1" id="heroclip1Rect" x="101.31" y="51.24" width="488.79" height="221.87" fill="#fff" data-svg-origin="590.1000061035156 162.17499923706055" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            </clipPath>

                            <clipPath id="heroclip2">
                                <rect className="hero__swipe-2" id="heroclip1Rect" x="195.36" y="293.94" width="292.4" height="268.6" fill="#fff" data-svg-origin="487.75999450683594 428.24000549316406" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            </clipPath>

                            <clipPath id="heroclip3">
                                <rect className="hero__swipe-3" id="heroclip3Rect" x="1.73" y="233.41" width="174.53" height="162.61" fill="#fff" data-svg-origin="176.25999879837036 314.71500396728516" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            </clipPath>

                            <clipPath id="heroclip4">
                                <rect className="hero__swipe-4" id="heroclip4Rect" x="100.03" y="405.79" width="75.83" height="73.12" fill="#fff" data-svg-origin="175.86000061035156 442.3500099182129" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            </clipPath>

                        </defs>
                        <g className="fouc fouc--hero" opacity="0" data-svg-origin="591 314.5249938964844" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px", "opacity": "1"}}>
                            <circle className="hero__circle" cx="90.18" cy="79.56" r="50" fill="#dae1e2" data-svg-origin="90.18000030517578 79.55999755859375" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px", "opacity": "1"}}></circle>
                            <circle className="hero__circle" cx="488.39" cy="563.49" r="30" fill="#3e9fe6" data-svg-origin="488.3900146484375 563.489990234375" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px", "opacity": "1"}}></circle>

                            <rect className="hero__swipe-1" x="102" y="52" width="488" height="220" fill="#23d8a0" data-svg-origin="590 162" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            <rect className="hero__swipe-2" x="196" y="294" width="292" height="268" fill="#FAFAFA" data-svg-origin="488 428" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            <rect className="hero__swipe-3" x="2" y="234" width="173" height="162" fill="#FAFAFA" data-svg-origin="175 315" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            <rect className="hero__swipe-4" x="101" y="406" width="75" height="73" fill="#23d8a0" data-svg-origin="176 442.5" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>
                            <rect className="hero__swipe-5" x="101" y="406" width="75" height="73" fill="#23d8a0" data-svg-origin="176 442.5" transform="matrix(1,0,0,1,0,0)" style={{ "transform-origin": "0px 0px;"}}></rect>

                            <Link href="/" to="/">
                            <image clip-path="url(#heroclip1)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero1.jpg?mtime=20210107055409&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="101" y="51" width="490" height="223"></image>
                            </Link>
                            <Link href="/test" to="/test">
                            <image clip-path="url(#heroclip2)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero2.jpg?mtime=20210107055410&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="195" y="293" width="294" height="270"></image>
                            </Link>
                            <image clip-path="url(#heroclip3)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero3.jpg?mtime=20210107055411&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="1" y="233" width="176" height="164"></image>
                            <image clip-path="url(#heroclip4)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero4.jpg?mtime=20210107055413&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="99" y="404" width="78" height="76"></image>
                            <image clip-path="url(#heroclip5)" href="https://s3.eu-west-1.amazonaws.com/clearleft-v5/uploads/hero4.jpg?mtime=20210107055413&amp;focal=none" preserveAspectRatio="xMidYMid slice" x="25" y="490" width="160" height="80"></image>
                            
                        </g>
                    </svg>
                </div>
            </main>
        </div>
        </Container>
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
  