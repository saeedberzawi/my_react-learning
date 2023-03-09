import React, { useState } from "react";
// use => start with use
// compoent name must be uppercase => name of the main function in our case => UseStateBasics
// must be in the function/component body => not out side the main function => UseStateBasics
// cannot call conditionally => if
// تبين اننا لا نستطيع ادخال يوس-ايفكت داخل اف لكن نضع اف داخل يوس-افكت

function UseStateBasics() {
  // console.log(useState());
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title");
  // primary [1(any text),2(set(any text))] = useState is Function (value of the function)
  //  1 => current value || 2 => function
  const handleClick = () => {
    if (text === "sos") {
      setText("hello world");
    } else {
      setText("sos");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
}

export default UseStateBasics;
