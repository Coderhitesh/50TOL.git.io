import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import FeatureProduct from '../../Components/FeatureProduct/FeatureProduct'
import AboutHomePage from '../../Components/AboutHomePage/AboutHomePage'
import FeatureProductSecond from '../../Components/FeatureProductSecond/FeatureProductSecond'
import TopProduct from '../../Components/TopProduct/TopProduct'
import ProcessHomePage from '../../Components/ProcessHomePage/ProcessHomePage'
import AdressHomePage from '../../Components/AdressHomePage/AdressHomePage'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
import Footer from '../../Components/Footer/Footer'
import SilverCategoryHome from '../../Components/SilverCategoryHome/SilverCategoryHome'
import GoldCategoryHome from '../../Components/GoldCategoryHome/GoldCategoryHome'
import DiamondCategoryHome from '../../Components/DiamondCategoryHome/DiamondCategoryHome'

function Home() {
  return (
    <div>
      <Hero />
      <FeatureProduct />
      <AboutHomePage />
      <TopProduct />
      <ProcessHomePage />
      <SilverCategoryHome />
      <GoldCategoryHome />
      <DiamondCategoryHome />
      <FeatureProductSecond />
      <AdressHomePage />
      <GetInTouch />
    </div>
  )
}

export default Home
