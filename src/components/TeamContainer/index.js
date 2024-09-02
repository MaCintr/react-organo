import "./TeamContainer.css"

const TeamContainer = (props) => {
    return (
        <section className="container-team">
            <h3>{props.nome}</h3>
        </section>
    )
}

export default TeamContainer