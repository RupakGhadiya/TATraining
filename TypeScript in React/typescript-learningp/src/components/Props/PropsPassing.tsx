
type PropsPassing = {
    name:{
        first: string
        last: string
    }
}

// passing props from another props (that to in a pieces)
export const PropsPassing = (props: PropsPassing) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}




