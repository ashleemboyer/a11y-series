import Link from "next/link";

const components = [
  "AlertDialog",
  "Breadcrumb",
  "Link",
  "Listbox",
  "RadioGroup",
  "Slider",
  "SpinButton",
  "Tooltip",
];

const HomePage = () => {
  return (
    <>
      <h1>Components</h1>
      <ul>
        {components.map((componentName) => (
          <li key={componentName}>
            <Link href={`/components/${componentName.toLowerCase()}`}>
              {componentName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
