import Colaborator from "../Colaborator";
import "./TeamContainer.css";

const TeamContainer = ({ temaState, secondTemaState, colaboradores, nome, icon }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="container-team"
        style={{
          backgroundColor: temaState,
          borderColor: secondTemaState,
        }}
      >
        <div className="nome-time">
          <i className={icon}></i>
          <h1>{nome}</h1>
        </div>
        <div className="colab-list">
          {colaboradores.map((colaborador) => (
            <Colaborator
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              img={colaborador.img}
              cor={colaborador.cor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default TeamContainer;
