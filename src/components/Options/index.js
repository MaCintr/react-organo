import styled from "styled-components";

const Options = (props) => {
  return (
    <StyledWrapper>
      <form className="formField">
        <select required>
          <option value="" disabled selected hidden></option>
          {
            props.itens.map(option => 
              <option key={option} value={option}>{option}</option>
            )
          }
        </select>
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

  .formField select {
    padding: 10px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 0 5px transparent;
    width: 100%;
  }

  .formField select:hover,
  .formField select:focus {
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

  .formField select:focus + span,
  .formField select:valid + span {
    transform: translateY(-32px) translateX(-5px) scale(0.95);
    transition: 0.3s ease-in-out;
  }
`;

export default Options;
