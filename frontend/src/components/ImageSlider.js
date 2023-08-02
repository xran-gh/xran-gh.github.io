import {useState} from "react";

const ImageSlider = ({slides}) =>
{
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
  };

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}>
        
      </div>
    </div>
  )
}

export default ImageSlider