import React from "react";
import PropTypes from "prop-types";

function Test({ name, setName }) {
  return (
    <div>
      <h1>The name is {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

Test.prototype = {
  name: PropTypes.string,
  setName: PropTypes.func,
};

export default Test;
