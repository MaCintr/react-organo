import "./SelectColor.css";
import { useState } from "react";

const SelectColor = (props) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    props.onChangeValue(color);
  };

  return (
    <section className="color-selector">
      <h3>Cor do Card</h3>
      <div className="colors">
        {props.colors.map((color) => (
          <div className="quadrante-cor"
            key={color}
            onClick={() => handleColorClick(color)}
            style={{
              width: selectedColor === color ? '26px' : '30px',
              height: selectedColor === color ? '26px' : '30px',
              backgroundColor: color,
              cursor: 'pointer',
              border: selectedColor === color ? '2px solid white' : 'none',
              borderRadius: '5px'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectColor;
