import './Colaborator.css'

const Colaborator = (props) => {
    return (
        <div className='colaborator' style={{ borderColor: props.cor }}>
            <div className='header' style={{ backgroundColor: props.cor }}>
                <img src={`https://github.com/${props.img}.png`} alt={props.nome} />
                <button onClick={props.onDelete} className="delete-button">
                    <i className="bi bi-trash3"></i>
                </button>
            </div>
            <div className='base'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborator;
