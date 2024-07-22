import React from 'react'
import HomeInfo from '../components/HomeInfo'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const HomePage = () => {
  const InfoBox = ({text, link, btnText }) => (
    <div className='info-box'>
      <img src="../assets/images/background.png" alt="" />
     <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' alt="" />
      </Link>
    </div>
  )

  const InfoBoxTwo = ({text, link, btnText }) => (
    <div className='info-box2 mt-28'>
      
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Rachana Sen</span> 👋
      <br />
      A Software Engineer from Indore
    </h1>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' alt="" />
      </Link>
  
    </div>
  
  )

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='mt-20'>

      <InfoBox 
    text='Worked with many companies and picked up many skills along the way'
    link='/about'
    btnText='Learn more'
    />

      </div>

      <div
      className='mt-20'>

      <InfoBox 
    text='Led multiple projects to success over the years. Curious about the impact?'
    link='/about'
    btnText='Visit my portfolio'
    />

      </div>

      <div className='mt-20'>
      <InfoBox 
    text="Need a project done or looking for a dev? I'm just a few keystrokes away "
    link='/contact'
    btnText="Let's talk"
    />
     
      </div>

       
        
    </section>
  )
}

export default HomePage