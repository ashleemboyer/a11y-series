import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Components</h1>
      <Link href="/components/breadcrumb">Breadcrumb</Link>
      <Link href="/components/link">Link</Link>
      <Link href="/components/listbox">Listbox</Link>
      <Link href="/components/radiogroup">RadioGroup</Link>
    </>
  );
};

export default HomePage;
