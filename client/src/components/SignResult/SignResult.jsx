import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../reducers/userReducer";
import Template from "./Template";

const SignResult = () => {
  const { state } = useContext(UserContext);
  /*   const [data, setData] = useState(state.data);

  useEffect(() => {
    setData(state.data);
    console.log(data);
  }, [state.data]); */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="sign__result"
    >
      {state && <Template data={state} />}
    </div>
  );
};

export default SignResult;
