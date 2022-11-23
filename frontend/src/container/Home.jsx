import React, { useEffect } from "react";
import navbarLogo from "../assets/images/logo2.png";
import foodLogo from "../assets/images/main-b.jpg";
import bgstand from "../assets/images/menu-bg.png";
import dish1 from "../assets/images/dish/1.png";
import dish2 from "../assets/images/dish/2.png";
import dish3 from "../assets/images/dish/3.png";
import dish4 from "../assets/images/dish/4.png";
import dish5 from "../assets/images/dish/5.png";
import dish6 from "../assets/images/dish/6.png";
import bg1 from "../assets/images/menu-1.png";
import bg2 from "../assets/images/menu-2.png";
import bg3 from "../assets/images/menu-3.png";
import bg4 from "../assets/images/menu-4.png";
import stand from "../assets/images/title-shape.svg";
// import HeroBg from "../assets/heroBg.png";
// import { heroData } from "../utils/Data";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from "swiper";
import "swiper/css";
import "./css/swiper-bundle.min.css";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
import Row from "./Row";

const Home = () => {
  useEffect(() => {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: "true",
      fade: "true",
      grabCursor: "true",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    // <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
    //   <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
    //     <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
    //       <p className="text-base text-orange-500 font-semibold">E-Canteen</p>
    //       <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
    //         <img
    //           src={foodLogo}
    //           className="w-full h-full object-contain"
    //           alt="foodlogo"
    //         />
    //       </div>
    //     </div>

    //     <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
    //       Layanan E-Canteen yang&nbsp;
    //        <span className="text-orange-600 text-[2.7rem] lg:text-[4.2rem]">
    //         memudahkan anda
    //       </span>
    //     </p>

    //     <p className="text-base text-textColor text-center md:text-left">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
    //       magnam ipsam nulla nam mollitia obcaecati natus, magni optio accusamus
    //       nostrum, alias dolorum! Alias facere debitis exercitationem dolorem
    //       libero distinctio eligendi!
    //     </p>

    //     <button
    //       type="button"
    //       className="bg-gradient-to-r from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-100 ease-in-out"
    //     >
    //       Pesan Makanan
    //     </button>
    //   </div>
    //   <div className="py-2 flex-1 flex items-center relative">
    //     <img
    //       src={HeroBg}
    //       className="ml-auto w-full h-420 lg:w-auto lg:h-650"
    //       alt="hero-bg"
    //     />

    //     <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-4 xl:px-31 xl2:px-32 py-5 gap-4 flex-wrap ">
    //       {heroData &&
    //         heroData.map((data) => (
    //           <div
    //             key={data.id}
    //             className="lg:w-190 p-3 md:min-h-[130px] lg:min-h-[180px] bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
    //           >
    //             <img src={data.imgSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="I1" />

    //             <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
    //               {data.name}
    //             </p>
    //             <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
    //               {data.desc}
    //             </p>

    //             <p className="text-sm font-semibold text-headingColor ">
    //               <span className="text-xs text-red-600">Rp. </span>{data.price}
    //             </p>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </section>

    <div className="body-fixed h-auto w-100">
      {/* start */}
      <section class="main-banner" id="home">
        <div class="sec-wp">
          <div class="container">
            <div class="row" style={{ paddingTop: "10px" }}>
              <div class="col-lg-6">
                <div class="banner-text">
                  <h1 class="h1-title">
                    Mau Makan Apa
                    <span>HARI INI</span>?
                  </h1>
                  <p>
                    This is Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Numquam eius vel tempore consectetur nesciunt? Nam
                    eius tenetur recusandae optio aperiam.
                  </p>
                  <div class="banner-btn mt-4">
                    <a href="#menu" class="sec-btn">
                      Check our Menu
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="banner-img-wp">
                  <div
                    class="banner-img"
                    style={{ backgroundImage: `url(${foodLogo})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of start */}

      <Row/>
      
      {/* stand */}
      <section
        style={{ backgroundImage: `url(${bgstand})` }}
        class="our-menu section bg-light repeat-img w-100"
        id="menu"
      >
        <div class="sec-wp">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="sec-title text-center mb-5">
                  <h2 class="h2-title">
                    mau makan apa? <span>langsung pilih di menu</span>
                  </h2>
                  <div class="sec-title-shape mb-4">
                    <img src={stand} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="menu-tab-wp">
              <div class="row">
                <div class="col-lg-12 m-auto">
                  <div class="menu-tab text-center">
                    <ul class="filters">
                      <div class="filter-active"></div>
                      <li
                        class="filter"
                        data-filter=".all, .stand1, .stand2, .stand3"
                      >
                        <img src={bg1} alt="" />
                        All
                      </li>
                      <li class="filter" data-filter=".stand1">
                        <img src={bg2} alt="" />
                        Stand 1
                      </li>
                      <li class="filter" data-filter=".stand2">
                        <img src={bg3} alt="" />
                        Stand 2
                      </li>
                      <li class="filter" data-filter=".stand3">
                        <img src={bg4} alt="" />
                        Stand 3
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="menu-list-row">
              <div class="row g-xxl-5 bydefault_show" id="menu-dish">
                {/* 1 */}
                <div
                  class="col-lg-4 col-sm-6 dish-box-wp stand1"
                  data-cat="stand1"
                >
                  <div class="dish-box text-center">
                    <div class="dist-img">
                      <img src={dish1} alt="" />
                    </div>
                    <div class="star-rating-wp">
                      <div class="star-rating">
                        <span
                          class="star-rating__fill"
                          style={{ width: "100%" }}
                        ></span>
                      </div>
                    </div>
                    <div class="dish-title">
                      <h3 class="h3-title">Grilled Chicken</h3>
                    </div>
                    <div class="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button class="dish-add-btn">
                        <i class="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div
                  class="col-lg-4 col-sm-6 dish-box-wp stand1"
                  data-cat="stand1"
                >
                  <div class="dish-box text-center">
                    <div class="dist-img">
                      <img src={dish2} alt="" />
                    </div>
                    <div class="star-rating-wp">
                      <div class="star-rating">
                        <span
                          class="star-rating__fill"
                          style={{ width: "83%" }}
                        ></span>
                      </div>
                    </div>
                    <div class="dish-title">
                      <h3 class="h3-title">Panner Noodles</h3>
                    </div>
                    <div class="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button class="dish-add-btn">
                        <i class="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  class="col-lg-4 col-sm-6 dish-box-wp stand3"
                  data-cat="stand3"
                >
                  <div class="dish-box text-center">
                    <div class="dist-img">
                      <img src={dish3} alt="" />
                    </div>
                    <div class="star-rating-wp">
                      <div class="star-rating">
                        <span
                          class="star-rating__fill"
                          sstyle={{ width: "70%" }}
                        ></span>
                      </div>
                    </div>
                    <div class="dish-title">
                      <h3 class="h3-title">Chicken Noodles</h3>
                    </div>
                    <div class="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button class="dish-add-btn">
                        <i class="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div
                  class="col-lg-4 col-sm-6 dish-box-wp stand3"
                  data-cat="stand3"
                >
                  <div class="dish-box text-center">
                    <div class="dist-img">
                      <img src={dish4} alt="" />
                    </div>
                    <div class="star-rating-wp">
                      <div class="star-rating">
                        <span
                          class="star-rating__fill"
                          style={{ width: "90%" }}
                        ></span>
                      </div>
                    </div>
                    <div class="dish-title">
                      <h3 class="h3-title">Bread Boiled Egg</h3>
                    </div>
                    <div class="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button class="dish-add-btn">
                        <i class="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div
                  class="col-lg-4 col-sm-6 dish-box-wp stand1"
                  data-cat="stand1"
                >
                  <div class="dish-box text-center">
                    <div class="dist-img">
                      <img src={dish5} alt="" />
                    </div>
                    <div class="star-rating-wp">
                      <div class="star-rating">
                        <span
                          class="star-rating__fill"
                          style={{ width: "100%" }}
                        ></span>
                      </div>
                    </div>
                    <div class="dish-title">
                      <h3 class="h3-title">Immunity Dish</h3>
                    </div>
                    <div class="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button class="dish-add-btn">
                        <i class="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of stand */}
      {/* about us */}
      <section class="two-col-sec section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="sec-img mt-5">
                <img src={navbarLogo} alt="" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="sec-text">
                <h2 class="xxl-title">FooD CorneR</h2>
                <p>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet dolores eligendi earum eveniet soluta officiis
                  asperiores repellat, eum praesentium nihil totam. Non ipsa
                  expedita repellat atque mollitia praesentium assumenda quo
                  distinctio excepturi nobis tenetur, cum ab vitae fugiat hic
                  aspernatur? Quos laboriosam, repudiandae exercitationem atque
                  a excepturi vel. Voluptas, ipsa.
                </p>
                <p>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. At fugit laborum voluptas magnam sed ad illum? Minus
                  officiis quod deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of about us */}
      {/* footer */}
      <footer class="site-footer" id="contact">
        <div class="top-footer section">
          <div class="sec-wp">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="footer-info">
                    <div class="footer-logo">
                      <a href="index.html">
                        <img
                          src={navbarLogo}
                          alt=""
                          style={{ height: "80px", borderRadius: "50%" }}
                        />
                      </a>
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Mollitia, tenetur.
                    </p>
                    <div class="social-icon">
                      <ul>
                        <li>
                          <a src="https://www.facebook.com/">
                            <i class="uil uil-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="uil uil-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="uil uil-github-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="uil uil-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="footer-flex-box">
                    <div class="footer-table-info">
                      <h3 class="h3-title">open hours</h3>
                      <ul>
                        <li>
                          <i class="uil uil-clock"></i> Mon-Thurs : 9am - 22pm
                        </li>
                        <li>
                          <i class="uil uil-clock"></i> Fri-Sun : 11am - 22pm
                        </li>
                      </ul>
                    </div>
                    <div class="footer-menu food-nav-menu">
                      <h3 class="h3-title">Links</h3>
                      <ul class="column-2">
                        <li>
                          <a href="#home" class="footer-active-menu">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#menu">Menu</a>
                        </li>
                        <li>
                          <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                          <a href="#blog">Blog</a>
                        </li>
                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div class="footer-menu">
                      <h3 class="h3-title">Company</h3>
                      <ul>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Cookie Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2021 <span class="name">TechieCoder.</span>
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
            <button class="scrolltop">
              <i class="uil uil-angle-up"></i>
            </button>
          </div>
        </div>
      </footer>
      {/* end of footer */}
    </div>
  );
};

export default Home;
