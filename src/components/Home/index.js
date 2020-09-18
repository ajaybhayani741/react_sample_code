import React, { useEffect } from "react"
import SearchNumber from "./SearchNumber"
import Header from "../Header"
import HowItWork from "./HowItWork"
import CustomerSay from "./CustomerSay"
import MultiSearch from "./MultiSearch"
import "./home.css"
import HomePageSlides from "./HomePageSlides"
import PremiumNumbers from "./PremiumNumbers"
import featuredNumbersAction from "../../redux/actions/featuredNumberAction"
import { useDispatch } from "react-redux"

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featuredNumbersAction())   
  }, [dispatch])

  return (
    <div>
      <HomePageSlides />
      <div className='carousal-children'>
        <Header />
        <MultiSearch />
      </div>
      <PremiumNumbers />
      <HowItWork />
      <SearchNumber />
      <CustomerSay />
    </div>
  )
}

export default Home
