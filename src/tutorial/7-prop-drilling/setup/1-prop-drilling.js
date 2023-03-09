import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return <List people={people} removePerson={removePerson} />;
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </>
  );
};

const Item = ({ name, id, removePerson }) => {
  return (
    <div className="item">
      <p>{name}</p>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
