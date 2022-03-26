import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/components/breadcrumb">Breadcrumb</Link>
    </>
  );
};

export default HomePage;
