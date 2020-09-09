import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";
export default function Profile(user) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={user.avatar} alt={user.name} className={styles.avatar} />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.tag}>@{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};
