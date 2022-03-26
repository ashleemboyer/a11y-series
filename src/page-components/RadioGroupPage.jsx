import React from "react";

import { RadioGroup } from "../components/RadioGroup";

const options = [
  { label: "Rose Nylund", value: "rose_nylund", ref: React.createRef() },
  {
    label: "Blanche Devereaux",
    value: "blanche_devereaux",
    ref: React.createRef(),
  },
  {
    label: "Dorothy Zbornak",
    value: "dorothy_zbornak",
    ref: React.createRef(),
  },
  {
    label: "Sophia Petrillo",
    value: "sophia_petrillo",
    ref: React.createRef(),
  },
];

const RadioGroupPage = () => (
  <>
    <h2>RadioGroup</h2>
    <RadioGroup label="Favorite Golden Girl" options={options} />
  </>
);

export default RadioGroupPage;
