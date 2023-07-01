import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/sections/Hero'
import TabsComponent from '@/components/tabs/TabsComponent'
import NeedHelp from '@/components/sections/NeedHelp'
import News from '@/components/sections/News'
import Why from '@/components/sections/Why'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <TabsComponent />
        <News />
        {/* <Testimonial /> */}
        <NeedHelp />
        <Why />
      </main>
    </Layout>
  )
}
