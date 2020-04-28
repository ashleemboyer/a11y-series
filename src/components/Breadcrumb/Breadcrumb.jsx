import React from "react";
import PropTypes from "prop-types";

import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ links }) => (
  <nav aria-label="Breadcrumb" className={styles.BreadcrumbContainer}>
    <ol>
      {links.map(({ label, href }, index) => {
        const isLastLink = index === links.length - 1;
        return (
          <li key={`breadcrumb-link-${index}`}>
            <a href={href} aria-current={isLastLink ? "page" : undefined}>
              {label}
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Breadcrumb;
