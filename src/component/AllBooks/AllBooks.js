
import logo from './booklogo.webp';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import data from '../../data.json';

// import required modules
import { Grid, Pagination } from "swiper";
import './all.css'
class AllBooks extends React.Component {



    render() {





        const Getdata = data.results;

        return (


            <Swiper
                slidesPerView={2}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            >


                {
                    Getdata.map((d) => {
                        return (
                            <SwiperSlide>
                                <div className="card cardall" id="cardall" style={{ width: '450px', height: '238px' }} key={d.id}>
                                    <div className="card-content">
                                        <div className="image" style={{ width: '35%', height: '35%' }}>
                                            <img src={logo} alt="" style={{ borderRadius: '50%' }} />
                                        </div>


                                        <div className="name-profession">
                                            <span style={{ fontSize: '10px', color: '#131045' }} className="name">{d.title}</span>
                                            <span style={{ fontSize: '10px', color: '#131045' }} className="profession">{d.authors.name}</span>
                                        </div>

                                        <div className="rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>


                                        <div className="button">
                                            <span style={{ color: '#131045' }} className="aboutMe">Birth Year : {d.authors[0].birth_year}</span>
                                            <span style={{ color: '#131045' }} className="aboutMe">Death Year : {d.authors[0].death_year}</span>
                                        </div>
                                        <span style={{ fontSize: '10px' }}>shelve: {d.bookshelves}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        )

    }

}
export default AllBooks