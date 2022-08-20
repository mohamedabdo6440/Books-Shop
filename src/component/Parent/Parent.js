import Navbar from '../Navbar/Nav';
import Header from '../Header/Header';
import PageSlider from '../Sliderbook/pageSlider';
import AllBooks from '../AllBooks/AllBooks';
import BestSale from '../BestSale/BestSale'
import Classics from '../shelves/Classics'
import Philosophy from '../shelves/Philosophy';
import Politics from '../shelves/Politics';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
class Parent extends Component {


    render() {


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
                        </Routes>
                    </BrowserRouter>

                </div>


            </div >
        )
    }

}
export default Parent;