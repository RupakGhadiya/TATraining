// in this type we have assign a condition it has to be this three only 

type statusCode = {
  status: 'Loading' | 'Success' | 'error'
};

// we also have assign a condition for the displaying of errors 
export const AdvancePrope = (props: statusCode) => {
  let message;
  if (props.status === "Loading") {
    message = "Loading..";
  } else if (props.status === "Success") {
    message = "Data load successfull";
  } else if (props.status === "error") {
    message = "Error Fatching data..";
  }
  return <div>Status - {message}</div>;
};
