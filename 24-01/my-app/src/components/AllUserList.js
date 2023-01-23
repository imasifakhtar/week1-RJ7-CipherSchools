import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Test from "../Test";

const AllUserList = () => {
  const [state, setState] = useState({ name: "Asif Akhtar" });

  //   state = {
  //     name: "Alex",
  //   };

  let allUsers = [
    {
      name: "John",
      email: "john@email.com",
    },
    {
      name: "Asif",
      email: "asif@email.com",
    },
  ];

  let setStateName = (name) => {
    setState({ ...state, name });
  };

  return (
    <div>
      <Test name={state.name} setName={5} />
      {allUsers.map((user, index) => (
        <UserDetails key={index} user={user} />
      ))}
    </div>
  );
};

// const AllUserList = () => {
//   const [state, setState] = useState({ name: "Asif Akhtar" });

//   return <h1>The name is {state.name}</h1>;
// };

export default AllUserList;
