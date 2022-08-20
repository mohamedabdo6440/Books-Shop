
import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

import data from '../../data.json'
class Sliderbook extends Component {

    state = {
        data
    }

    render() {


        const GetData = this.state.data.results;

        return (
            <div className="container mt-5">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >


                    {
                        GetData.filter((i) => {
                            return i.populer
                        }).map((d) => {

                            return (
                                <SwiperSlide>
                                    <div className="card" id="cardSlider" key={d.id}>
                                        <div className="card-content">
                                            <div className="image">
                                                <span className="name-profession">
                                                    <span className="name">{d.title}</span>
                                                </span>

                                                <p>{d.subjects}</p><br></br>
                                            </div>


                                            <div className="name-profession">
                                                <span style={{ color: '#131045' }} className="name">{d.authors[0].name}</span>
                                                <span className="profession">{d.bookshelves}</span>
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
                                            <span><a style={{ color: '#131045' }} href={d.formats["application/epub+zip"]} title="Download Now">Download Source</a></span>

                                        </div>
                                    </div>

                                </SwiperSlide>
                            )

                        })
                    }




                </Swiper>
            </div>
        )
    }
}
export default Sliderbook;