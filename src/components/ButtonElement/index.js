import "./ButtonElement.css"

const ButtonElement = (props) => {
    return (
        <button className="botao">{props.children}</button>
    )
}

export default ButtonElement