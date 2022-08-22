import Navbar from '../Navbar/Nav';
import Header from '../Header/Header';
import PageSlider from '../Sliderbook/pageSlider';
import AllBooks from '../AllBooks/AllBooks';
import BestSale from '../BestSale/BestSale'
import Classics from '../shelves/Classics'
import Philosophy from '../shelves/Philosophy';
import Politics from '../shelves/Politics';
import Childrens from '../shelves/children';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';



function Parent() {



    return (

        <div>

            <div className="container parent my-4 px-5">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Header />} />
                        <Route path='/home' element={<Header />} />
                        <Route path='/populer' element={<PageSlider />} />
                        <Route path='/allbooks' element={<AllBooks />} />
                        <Route path='/BestSale' element={<BestSale />} />
                        <Route path='/classics' element={<Classics />} />
                        <Route path='/philosophy' element={<Philosophy />} />
                        <Route path='/politics' element={<Politics />} />
                        <Route path='/children' element={<Childrens />} />
                    </Routes>
                </BrowserRouter>

            </div>


        </div >
    )
}


export default Parent;