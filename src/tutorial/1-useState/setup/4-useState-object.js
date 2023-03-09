import React, { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "peter",
  //   age: 24,
  //   message: "random message",
  // });

  //  if we want to change all in speacifc value
  const [name, setName] = useState("peter");
  const [age, setAge] = useState("24");
  const [message, setMessage] = useState("coco cola ");
  const changeMessage = () => {
    // change all 3 in 1
    // setPerson({ message: "hello world" });
    // change just one i selected person.message by useing sperator => ...

    // setPerson({ ...person, message: "hello world" });
    setMessage("hello world");
    setAge("44");
    setName("sara");
  };
  return (
    <>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
