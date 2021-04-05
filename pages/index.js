import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Slider from '@/components/slider'
import { getHomePage } from '@/lib/api'
import Head from 'next/head'
// import { CMS_NAME } from '@/lib/constants'

export default function Index({ homePageData }) {

  const { Title, HomePageContent } = homePageData.home;
  
  return (
    <>
      <Layout>
        <Head>
          <title>Isabel Vaz | Cellist</title>
        </Head>
        <div className="-mt-24 pt-24 w-full h-screen bg-white flex flex-wrap">
			    <div className="px-12 md:-px-0 w-full md:w-4/12 flex items-center justify-start md:justify-end" style={{ 'background': '#ffffff' }}>
            <div className="shadow-none pl-12 py-12 md:pl-0 sm:absolute md:relative z-10 intro ml-4">
              <h1 className="hidden md:block mb-8 text-5xl md:text-6xl text-gray-800 text-bold uppercase font-bold tracking-widest leading-tight font-serif">
                Isabel Vaz
              </h1>
              <h2 className="hidden md:block text-lg -mt-4 md:text-2xl font-serif text-gray-800 text-right">Cellist</h2>
              <span className="hidden md:block absolute top-0 right-0 w-48 h-4 bg-blue-900 -mr-24 mt-56 "></span>
            </div>
          </div>
          
          <div className="-mt-64 md:mt-0 w-full md:flex-1 w-full h-full object-cover headerPanel sm:bg-fixed md:bg-local">
          </div>
        </div>
        <div className="relative sm:-mt-12 -mt-24 px-12 py-24 flex items-center" style={{ "background": "#a7bcbb" }}>
          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{"height": "80px", "transform": "translateZ(0)"}} >
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon style={{ "fill": "#a7bcbb" }} className="" points="2560 0 2560 100 0 100"></polygon></svg>
            </div>
          <div className="hidden md:block w-3/12"></div>
          <div className="flex-1 relative">
            <div className="font-serif text-white opacity-75 text-base md:text-xl max-w-2xl leading-loose">
               <p>Isabel Vaz is a Portuguese musician residing in Amsterdam. <br />
                She is Cellist at Noord Nederlands Orkest and Artistic Director of the Algarve Music Series. <br />
              </p>
              </div>
            <span className="absolute top-0 left-0 w-4 h-full bg-white opacity-50 -ml-20"></span>
            </div>
          </div>
          
			  <Slider />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getHomePage()

  return {
    props: {
      homePageData: data
    }
  }
}
