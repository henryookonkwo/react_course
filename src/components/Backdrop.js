import { useState } from "react";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClickToCancel} />;
}

export default Backdrop;
