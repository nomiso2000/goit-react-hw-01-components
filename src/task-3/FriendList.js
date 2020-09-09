import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <li className={style.item} key={friend.id}>
          <span
            className={
              friend.isOnline
                ? style.isActive + " " + style.status
                : style.status
            }
          ></span>
          <img className={style.avatar} src={friend.avatar} alt="" width="48" />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
