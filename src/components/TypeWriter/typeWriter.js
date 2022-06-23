import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Work in progress...",
          "sugma brad...",
          "Work in progress...",
          "kevin silver at best...",
          "Work in progress...",
          "Alex can't dunk...",
          "Work in progress...",
          "jacob won't hit diamond...",
          "Work in progress...",
          "Roy is meh",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;