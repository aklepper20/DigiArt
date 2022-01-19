import React, { useState, useEffect } from "react";
// import { SliderData } from "SliderData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ImageSlider = ({ getSlides }) => {
    const [current, setCurrent] = useState(0);
    const length = getSlides.length;

    useEffect(() => {
        const timeout = setTimeout(
            () => setCurrent((current + 1 + length) % length),
            6200
        );

        return () => clearTimeout(timeout);
    }, [current, length]);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(getSlides) || getSlides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            {getSlides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? "slide active" : "slide"}
                        key={index}
                        style={{ transform: `translate3d(${-current * 100}%)` }}
                    >
                        {index === current && (
                            <img
                                src={slide.image_url}
                                alt="travel image"
                                className="image"
                            />
                        )}
                    </div>
                );
            })}
            <p>
                “People don't understand NFTs, Metaverse, and crypto today the
                same way they didn't understand online shopping in the 1995” ―
                Anuj Jasani
            </p>
        </section>
    );
};

export default ImageSlider;
