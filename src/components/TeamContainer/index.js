import Colaborator from "../Colaborator"
import "./TeamContainer.css"

const TeamContainer = (props) => {
    return (
        <section className="container-team">
            <div className="nome-time">
                <i class={props.icon}></i><h1>{props.nome}</h1>
            </div>
            <div className="colab-list">
                {props.colaboradores.map(colaborador => <Colaborator nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.img} cor={colaborador.cor} />)}
            </div>
        </section>
    )
}

export default TeamContainer