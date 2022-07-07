import React, { useState } from "react";
import * as StyledThisComp from "./example.styled";

const Example = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);

  return (
    <StyledThisComp.Container>
      <StyledThisComp.Title>title testing</StyledThisComp.Title>
      <StyledThisComp.Row>
        <StyledThisComp.ButtonPrimary variant="text" onClick={handleIncrement}>
          increment
        </StyledThisComp.ButtonPrimary>
        <StyledThisComp.Counter>{counter}</StyledThisComp.Counter>
      </StyledThisComp.Row>
    </StyledThisComp.Container>
  );
};

export default Example;
