import Colaborator from "../Colaborator";
import "./TeamContainer.css";

const TeamContainer = ({ temaState, secondTemaState, colaboradores, nome, icon, onDeleteColaborator }) => {
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
          <i className={icon}
            style={{
              color: temaState === '#bfbfbf' ? '#545454' : 'white'
            }}></i>
          <h1 style={{
            color: temaState === '#bfbfbf' ? '#545454' : 'white'
          }}>{nome}</h1>
        </div>
        <div className="colab-list">
          {colaboradores.map((colaborador) => (
            <Colaborator
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              img={colaborador.img}
              cor={colaborador.cor}
              onDelete={() => onDeleteColaborator(colaborador.nome)}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default TeamContainer;
