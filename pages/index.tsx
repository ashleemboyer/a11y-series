import Link from "next/link";

const components = [
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
        {components.map((component) => (
          <li>
            <Link href={`/components/${component.toLowerCase()}`}>
              {component}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
