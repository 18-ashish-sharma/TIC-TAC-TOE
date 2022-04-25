import React from "react";
import { SquartButton } from "./SquareBox.style";

const SquareBox = ({ value, onClick }) => (
    <SquartButton data-testid="square-box" className={`${value}`} onClick={onClick}>
      {value}
    </SquartButton>
);

export default SquareBox;