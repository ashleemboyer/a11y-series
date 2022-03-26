import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Components</h1>
      <Link href="/components/breadcrumb">Breadcrumb</Link>
      <Link href="/components/link">Link</Link>
      <Link href="/components/listbox">Listbox</Link>
      <Link href="/components/radiogroup">RadioGroup</Link>
      <Link href="/components/slider">Slider</Link>
      <Link href="/components/spinbutton">SpinButton</Link>
    </>
  );
};

export default HomePage;
