import {useEffect, useState, useRef, useCallback} from "react";

const ImageSlider = ({slides}) =>
{
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles =
  {
    height: "100%",
  };

  const slideStyles =
  {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const goToNext = useCallback(() =>
  {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() =>
  {
    timerRef.current = setTimeout(() =>
    {
      goToNext();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext])

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}/>
    </div>
  )
}

export default ImageSlider