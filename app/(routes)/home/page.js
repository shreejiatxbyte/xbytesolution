import NavigationBar from '@/app/components/header/Navbar/NavigationBar';
import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/app/components/footer/Footer';
import HomeSlider from '@/app/components/HomeSlider/HomeSlider';
import HeroServices from '@/app/components/HeroServices/HeroServices';
import CategoriesServices from '@/app/components/categoriesServices/CategoriesServices';
import CaseStudy from '@/app/components/CaseStudy/CaseStudy';
import BuildYourApp from '@/app/components/BuildYourApp/BuildYourApp';
import BusinessesWeWorkWith from '@/app/components/BusinessesWeWorkWith/BusinessesWeWorkWith';
import Ourlatestthoughts from '@/app/components/Ourlatestthoughts/Ourlatestthoughts';
import DropusalineForm from '@/app/components/DropusalineForm/DropusalineForm'
import { UseSelector, useDispatch, useSelector } from 'react-redux';
const Home = () => {


    // const count = useSelector((state) => state.data)

    // useEffect(() =>{
    //     console.log("count",  count)
    // },[count])

    return (
        <>
           <NavigationBar/>
           <HomeSlider/>
           <HeroServices/>
           <CategoriesServices/>
           <CaseStudy/>
           <BuildYourApp/>
           <BusinessesWeWorkWith/>
           <Ourlatestthoughts/>
           <DropusalineForm/>
           <Footer/>
        </>
    )
}
export default Home