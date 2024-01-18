import React, { useState } from "react";

const Accordian_Item = ({ letter }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="accordian-item" onClick={() => setVisibility(!visibility)}>
      <div className="circle"></div>
      {visibility ? <h1>{letter}</h1> : <h2></h2>}
    </div>
  );
};

export default Accordian_Item;
