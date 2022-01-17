// import React, { useState, useEffect } from "react";
// import { SliderData } from "./SliderData";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   useEffect(() => {
//     const timeout = setTimeout(
//       () => setCurrent((current + 1 + length) % length),
//       4200
//     );

//     return () => clearTimeout(timeout);
//   }, [current, length]);

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className="slider">
//       <ArrowBackIosIcon className="left-arrow" onClick={prevSlide} />
//       <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//             style={{ transform: `translate3d(${-current * 100}%)` }}
//           >
//             {index === current && (
//               <img src={slide.image} alt="travel image" className="image" />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default ImageSlider;
