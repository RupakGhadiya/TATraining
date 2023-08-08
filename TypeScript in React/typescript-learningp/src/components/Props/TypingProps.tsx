import { PropsPassing } from "./PropsPassing";
import { PersonList } from "./PropsList";
import { AdvancePrope } from "./AdvancePrope";
import React from "react";
// in typescript you have to define a type of every element you are using through type method
// ( use type children: React.ReactNode in case you are declaring react component )
type propsType = {
  name: string;
//   ? makes this type optional in case you dont want to pass it 
  age?: number;
};

// props are passed through this
export const TypingProps = (props: propsType) => {
  // this is a method where tou are passing person to another component through props (PropsPassing)
  const person = {
    first: "Rupak",
    last: "Ghadiya",
  };


//   this is to pass props in form of array (PropsList )
  const personList = [
    {
      first: "Rupak",
      last: "Ghadiya",
    },
    {
      first: "Chimanbhai",
      last: "Ghadiya",
    },
    {
      first: "Param",
      last: "Ghadiya",
    },
  ];


  return (
    <div>
      {props.name} Ghadiya Age:-{props.age}
      <div>
        <PropsPassing name={person} />
        <PersonList name={personList}/>
        <AdvancePrope status='Success'/>
      </div>
    </div>
  );
};
