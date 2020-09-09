import React from "react";
import styles from "./Statistics.module.css";

export default function Section({ title, children }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}
