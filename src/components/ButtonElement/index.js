import "./ButtonElement.css"

const ButtonElement = (props) => {
    return (
        <button className="botao">{props.label}</button>
    )
}

export default ButtonElement