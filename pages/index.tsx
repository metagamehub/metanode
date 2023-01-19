import Head from 'next/head'

// Components
import Footer from '../components/footer.component'
import Greet from '../components/home/greet.component'

// Sections
import Consortium from '../components/home/consortium.section'
import CurrentChallenges from '../components/home/currentChallenges.section'
import JoinUs from '../components/home/joinUs.section'
import MainGoal from '../components/home/mainGoal.section'
import WhoAreWe from '../components/home/whoAreWe.section'
import Partners from '../components/home/partners.section'
import Ecosystem from '../components/home/ecosystem.section'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Centauri</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greet />
      <div className='flex flex-col justify-center items-center gap-20 max-w-[100rem] text-white mx-auto my-16 px-10'>
        {/* Apply for membership section*/}
        <div>

        </div>

        {/* Who are we section*/}
        <WhoAreWe />
        {/* The main goal section*/}
        <MainGoal />

        {/* Blue hole section */}
        <div className='flex flex-col relative w-full gap-60 justify-center'>
          {/* blue hole */}
          <div className='absolute w-[973px] h-[1206px] bg-[#627BFF] rounded-full -right-[900px] blur-[100px]' />
          {/* The centauri consortium section */}
          <Consortium />
          {/* Current challenges section */}
          <CurrentChallenges />
        </div>

        {/*  */}

        {/*  */}

        {/* Three holes section */}
        <div className='relative flex flex-col gap-40 my-40 justify-center items-center'>
          {/* Holes */}
          <div className='absolute bg-[#C840A9] rounded-full w-[900px] h-[900px] blur-[100px] top-[200px]'/>
          <div className='absolute bg-[#627BFF] rounded-full w-[743px] h-[743px] blur-[100px] -left-[400px]'/>
          <div className='absolute bg-[#F3DE6B] rounded-full w-[400px] h-[400px] blur-[200px] -right-[200px] top-0'/>

          {/* Ecosystem */}
          <Ecosystem />
          {/* Founding Partners */}
          <Partners />
        </div>

        {/*  */}

        {/* Join Us section */}
        <JoinUs />
      </div >
      <Footer />
    </div>
  )
}
