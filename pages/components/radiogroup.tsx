import { createRef } from "react";
import RadioGroup from "components/RadioGroup";

const options = [
  { label: "Rose Nylund", value: "rose_nylund", ref: createRef() },
  {
    label: "Blanche Devereaux",
    value: "blanche_devereaux",
  },
  {
    label: "Dorothy Zbornak",
    value: "dorothy_zbornak",
  },
  {
    label: "Sophia Petrillo",
    value: "sophia_petrillo",
  },
];

const RadioGroupPage = () => (
  <>
    <h2>RadioGroup</h2>
    <RadioGroup label="Favorite Golden Girl" options={options} />
  </>
);

export default RadioGroupPage;
