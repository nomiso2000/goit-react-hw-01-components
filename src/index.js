import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import Profile from "./task-1/Profile";
// import user from "./task-1/user.json";
// import Statistics from "./task-2/Statistics";
// import statisticalData from "./task-2/statistical-data.json";

// import FriendList from "./task-3/FriendList";
// import friends from "./task-3/friends.json";
// import transactions from "./task-4/transactions.json";
// import TransactionHistory from "./task-4/TransactionHistory";

// ReactDOM.render(
//   <Profile
//     name={user.name}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector("#root")
// );

// ReactDOM.render(
//   <Statistics title="notTitle" data={statisticalData} />,
//   document.querySelector("#root")
// );

// ReactDOM.render(
//   <FriendList friends={friends} />,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
