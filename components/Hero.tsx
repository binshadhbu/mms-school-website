"use client"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./image-slider.css"
import { useState, useEffect } from "react"
import getImages from "@/lib/home/getImages"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}

export function Hero() {
  const [imageIndex, setImageIndex] = useState(0)
  const [images, setImages] = useState<string[]>([]);
  // const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imageData = await getImages({ link: "slding-image" });
      setImages(imageData);
      // console.log(images);
    };
    fetchImages();
  }, []);

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  
  return (
    <section
      aria-label="Image Slider"
      className="w-full h-[46rem] relative overflow-hidden"
    >
      {/* <img src={images[imageIndex]} alt="" /> */}
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div className="w-full h-full relative overflow-hidden flex">
        {images.map((url, index) => (
          <img
            key={url}
            src={url}
            alt="images"
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}