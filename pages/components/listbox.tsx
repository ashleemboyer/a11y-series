import Listbox from "components/Listbox";

const options = [
  {
    label: "Cat",
    id: "cat",
  },
  {
    label: "Dog",
    id: "dog",
  },
  {
    label: "Fish",
    id: "fish",
  },
];

const ListboxPage = () => (
  <>
    <h1>Listbox</h1>
    <Listbox label="Favorite animal" options={options} />
  </>
);

export default ListboxPage;
