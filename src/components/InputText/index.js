import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <StyledWrapper>
      <form className="formField">
        <input required type="text" />
        <span>{props.label}</span>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .formField {
  margin: 10px;
  position: relative;
  margin: 50px;
}

.formField input {
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0 5px transparent;
  width: 94.5%
}

.formField input:hover,
.formField input:focus {
  box-shadow: 0 0 0 2px #1a1d33;
}

.formField span {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px 15px;
  color: #1a1d33;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  pointer-events: none;
}

.formField input:focus + span,
.formField input:valid + span {
  transform: translateY(-32px) translateX(-5px) scale(0.95);
  color: white;
  transition: 0.3s ease-in-out;
}

`;

export default Input;
