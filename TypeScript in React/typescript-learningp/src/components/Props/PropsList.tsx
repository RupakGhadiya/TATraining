// in type of array assign array as [] at end to identify  
type PersonArray = {
  name: {
    first: string;
    last: string;
  }[]
};


// using map to print all at a time 
export const PersonList = (props: PersonArray) => {
  return <div>{props.name.map((name) => {
    return(
        <h1 key={name.first}>
            {name.first} {name.last}
        </h1>
    )
  })}</div>;
};
