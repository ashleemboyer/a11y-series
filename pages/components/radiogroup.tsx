import { createRef } from "react";
import RadioGroup from "../../src/components/RadioGroup";

const options = [
  { label: "Rose Nylund", value: "rose_nylund", ref: createRef() },
  {
    label: "Blanche Devereaux",
    value: "blanche_devereaux",
    ref: createRef(),
  },
  {
    label: "Dorothy Zbornak",
    value: "dorothy_zbornak",
    ref: createRef(),
  },
  {
    label: "Sophia Petrillo",
    value: "sophia_petrillo",
    ref: createRef(),
  },
];

const RadioGroupPage = () => (
  <>
    <h2>RadioGroup</h2>
    <RadioGroup label="Favorite Golden Girl" options={options} />
  </>
);

export default RadioGroupPage;
