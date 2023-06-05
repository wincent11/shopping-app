import React from "react";
interface Persone{
    name:string,
}

const Greet = ({name}: Persone): JSX.Element => {
  return <h1>HIIIIII, {name} !!!! </h1>;
};

export default Greet;
