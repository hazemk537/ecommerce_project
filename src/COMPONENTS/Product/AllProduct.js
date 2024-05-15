import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

import './AllProduct.css'
const AllProduct = () => {
  

    const [products, setProducts] = useState([])
   let succsessState ;

    useEffect(() => {
        const token = localStorage.getItem("token");


        fetch("http://talabat.runasp.net/api/Product", {
            method: "Get", headers: {

                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.status === 200) //success
                succsessState=true;
                console.log(response.state)
                return response.json();

            })

            .then((jsonData) => {
                
                if (succsessState) {
                    console.log(jsonData.data);

                    setProducts(jsonData.data)
                }
                
                // Handle your response data here (e.g., update state, redirect, etc.)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle any error that occurred during fetch
            });

    },[])

    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    products.map((item, index) => {
                        return (
                            <ProductCard data={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct