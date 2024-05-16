/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useLayoutEffect } from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import ProductSidebar from '../../COMPONENTS/Product/ProductSidebar'

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
{                // eslint-disable-next-line react/jsx-pascal-case
}                <ProductSidebar />
            </div>
        )
    else
        return (<Navigate to='/signup' replace={true} />)
}

export default Home