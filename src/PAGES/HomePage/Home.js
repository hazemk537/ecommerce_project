import React, { useLayoutEffect } from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import { Navigate } from 'react-router-dom'
let token;



const Home = () => {
useLayoutEffect(() => {
    token = localStorage.getItem('token');

})
    if (token)
        return (
            <div>
                <Navbar reloadnavbar={false} />
                <BannerSlider />
                {/* <HomeCategories /> */}
                <Product_Sidebar />
            </div>
        )
    else
        return (<Navigate to='/signup' replace={true} />)
}

export default Home