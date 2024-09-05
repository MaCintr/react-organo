import './Colaborator.css'

const Colaborator = (props) => {
    return (
    <div className='colaborator' style={{borderColor: props.cor}}>
        <div className='header'  style={{backgroundColor: props.cor}}>
            <img src={props.img} alt={props.nome}/>
        </div>
        <div className='base'> 
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>
    )

}

export default Colaborator