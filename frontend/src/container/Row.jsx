import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import I1 from "../assets/ayam_geprek.png";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
// import { getAllFoods } from "../actions/foodActions";
import { getAllStands } from "../actions/standActions";
import { addToCart } from "../actions/cartActions";
import Error from "../components/Error";

const Row = ({ flag }) => {
  const dispatch = useDispatch();
  // const foodState = useSelector((state) => state.getAllFoodsReducer);
  const standState = useSelector((state) => state.getAllStandsReducer);
  const cartState = useSelector((state) => state.cartReducer);

  const [errorState, setErrorState] = useState(false);

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const { stands, error, loading } = standState;
  // const { cartItems } = cartState;
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getAllStands());
  }, []);

  // const addtocart = (menu) => {
  //   dispatch(addToCart(menu, quantity));
  // };

  // console.log(cartItems)

  return (
    // <div
    //   className={`w-full my-12 flex gap-8 bg-cardOverlay  ${
    //     flag ? "overflow-x-scroll" : "overflow-x-hidden"
    //   }`}
    // >
    //   {loading ? (
    //     <h1>Loading...</h1>
    //   ) : error ? (
    //     <h1> Terjadi Error</h1>
    //   ) : (
    //     stands.map((stand) => {
    //       return (
    //         <div
    //           className="sm:min-w-[530px] my-12 md:w-340 hover:drop-shadow-lg h-auto backdrop-blur-lg bg-gray-100 rounded-lg "
    //           key={stand._id}
    //         >
    //           <h1 className="text-center w-full">{stand.standName}</h1>
    //           {stand.menu.map((menu, index) => {
    //             return (
    //               <div className="sm:w-50 h-50 p-5 sm:flex block" key={index}>
    //                 <div className="w-full flex items-center justify-between">
    //                   <motion.img
    //                     whileHover={{ scale: 1.2 }}
    //                     src={menu.image}
    //                     alt=""
    //                     className="w-40 h-28 drop-shadow-2xl rounded-lg object-cover"
    //                   />
    //                   <button onClick={() => dispatch(addToCart(menu, 1))}>
    //                     <motion.div
    //                       whileTap={{ scale: 0.75 }}
    //                       className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
    //                     >
    //                       <MdShoppingBasket className="text-white" />
    //                     </motion.div>
    //                   </button>
    //                 </div>
    //                 <div className="w-full flex flex-col gap-4 items-end justify-end">
    //                   <p className="text-textColor font-semibold text-base ">
    //                     {menu.name}
    //                   </p>
    //                   {/* <p className="mt-1 text-sm text-gray-500 ">Pedis & Manis</p> */}
    //                   <div className="flex items-center gap-8">
    //                     <p className="text-lg text-headingColor font-semibold ">
    //                       <span className="text-sm text-red-500 ">Rp</span>{" "}
    //                       {menu.price}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       );
    //     })
    //   )}
    // </div>

    <div className="h-auto w-100">
      {/* rekommendasi */}
      <section className="body-swiper">
        <div className="slide-container swiper">
          <div className="recom">
            <p className="recom mx-2">Rekomendasi Menu</p>
          </div>
          {errorState && <Error text={"Silakan Login terlebih dahulu"} />}
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              {loading ? (
                <h1 className="mx-auto">Loading...</h1>
              ) : error ? (
                <h1 className="mx-auto"> Terjadi Error</h1>
              ) : (
                stands.map((stand) => {
                  return (
                    <>
                      {stand.menu.map((menu, index) => {
                        return (
                          <div className="swiper-slide" key={index}>
                            <div className="image-content">
                              <span className="overlay"></span>
                              <div className="card-image position-relative">
                                <motion.img
                                  whileHover={{ scale: 1.2 }}
                                  src={menu.image}
                                  className="card-img"
                                  alt="menu"
                                />
                                <div
                                  className="position-absolute"
                                  style={{ bottom: 0, right: 0 }}
                                >
                                  <button
                                    className="border-0 m-0 p-1 rounded-4 bg-light"
                                    style={{ backgroundColor: "transparent" }}
                                    onClick={
                                      !currentUser
                                        ? () => setErrorState(!errorState)
                                        : () => dispatch(addToCart(menu, 1))
                                    }
                                  >
                                    <MdAddShoppingCart size={30} />
                                  </button>
                                </div>
                              </div>
                              <p>{menu.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })
              )}
            </div>
          </div>

          <div className="swiper-button-next swiper-navBtn"></div>
          <div className="swiper-button-prev swiper-navBtn"></div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
      {/* end of rekomdasi */}
    </div>
  );
};

export default Row;
