import React from "react";
import Section from "./Section";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({ data, title }) {
  return (
    <Section title={title}>
      {" "}
      <ul className={styles.statList}>
        {data.map((el) => (
          <li className={styles.item} key={el.id}>
            <span className={styles.label}>{el.label}</span>
            <span className={styles.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
