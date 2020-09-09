import React from "react";
import Profile from "./task-1/Profile";
import user from "./task-1/user.json";
import Statistics from "./task-2/Statistics";
import statisticalData from "./task-2/statistical-data.json";

import FriendList from "./task-3/FriendList";
import friends from "./task-3/friends.json";
import transactions from "./task-4/transactions.json";
import TransactionHistory from "./task-4/TransactionHistory";
export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" data={statisticalData} />

      <FriendList friends={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
}
