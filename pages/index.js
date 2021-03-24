import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getHomePage } from '@/lib/api'
import Head from 'next/head'
// import { CMS_NAME } from '@/lib/constants'

export default function Index({ homePageData }) {

  const { Title, HomePageContent } = homePageData.home;
  
  console.log(Title);


  return (
    <>
      <Layout>
        <Head>
          <title>TechSpliff. Home</title>
        </Head>
        <Container>
          <Intro title="Ro Quarters"/>
          <div>
            <h1>{Title}</h1>
            <p>{HomePageContent ? HomePageContent : 'Failed to load' }</p>
          </div>
        </Container>
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
