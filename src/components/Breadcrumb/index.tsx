import s from "./breadcrumb.module.css";

const Breadcrumb = ({ links }) => (
  <nav aria-label="Breadcrumb" className={s.root}>
    <ol className={s.list}>
      {links.map(({ label, href }, index) => {
        const isLastLink = index === links.length - 1;
        return (
          <li className={s.listItem} key={`breadcrumb-link-${index}`}>
            <a
              className={s.anchor}
              href={href}
              aria-current={isLastLink ? "page" : undefined}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
