import { useState } from "react";
import Slider from "../../src/components/Slider";

const SliderPage = () => {
  const [sliderValue, setSliderValue] = useState(45);

  return (
    <>
      <Slider
        label="How awesome is 2020?"
        minValue={0}
        maxValue={100}
        stepSize={1}
        initialValue={sliderValue}
        onChangeCallback={(newValue) => {
          setSliderValue(newValue);
        }}
      />
      <div>2020 is: {sliderValue}% awesome</div>
    </>
  );
};

export default SliderPage;
