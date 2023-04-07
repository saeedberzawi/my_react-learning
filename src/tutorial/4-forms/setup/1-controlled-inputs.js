import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[people,setPeople]=useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(name && email){
      const newPerson = {id:new Date().getTime().toString(), name,email}
      setPeople((person)=>{
        return[...person,newPerson]
      })
      setEmail('')
      setName('')
    }else{
      console.log("empty value");
    }
  }
  return (
    <>
      <article>
        {/* we can also but onClick={handleSubmit} in just => <form> */}
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your E-mail"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((item)=>{
          return <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
