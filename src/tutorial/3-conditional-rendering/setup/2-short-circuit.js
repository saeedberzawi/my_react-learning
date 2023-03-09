import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // ('') => empty string it's mean => false -----------------------
  const [text, setText] = useState("");
  console.log(setText);
  const firstValue = text || "or";
  const secondValue = text && "and";
  // ---------------------------------------------------
  const [isError, setIsError] = useState(false);
  // -------------------------------------------- toggle
  return (
    <>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>value:{secondValue}</h1>; */}
      <h1>
        p:1{` (||) =>`}
        {text || firstValue}
      </h1>
      <h1>
        p:2 {` (&&) =>`}
        {text && secondValue}
      </h1>
      <h1>
        p:3{` (||) =>`}
        {text || "john doe"}
      </h1>
      {/* ---------------- */}
      <p>section: 2.</p>
      <button onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error... if true</p>
      ) : (
        <div>
          <h2>there is no error if not</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
