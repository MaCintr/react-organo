import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import TeamContainer from './components/TeamContainer';
import ThemeSelector from './components/ThemeSelector';
import FooterComponent from './components/FooterComponent';

function App() {

  const [temaState, setTemaState] = useState('#a60eec')
  const [secondTemaState, setSecondTemaState] = useState('#7803ad')

  const [colaboradores, setColaboradores] = useState([])

  const onNewColaborator = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const onDeleteColaborator = (nomeColaborador) => {
    var confirmation = window.confirm(`Quer mesmo deletar o card de ${nomeColaborador}?`)
    if (confirmation) {
      setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nomeColaborador))
    }
  }

  const alterarContextoGlobal = (mainColor, secondColor) => {
    setTemaState(mainColor)
    setSecondTemaState(secondColor)
  }

  const times = [
    {
      nome: 'Programação',
      svg: 'bi bi-braces-asterisk'
    },
    {
      nome: 'Front-End',
      svg: 'bi bi-code-slash'
    },
    {
      nome: 'Data Science',
      svg: 'bi bi-bar-chart-fill'
    },
    {
      nome: 'Devops',
      svg: 'bi bi-gear-wide-connected'
    },
    {
      nome: 'UX & Design',
      svg: 'bi bi-brush-fill'
    },
    {
      nome: 'Mobile',
      svg: 'bi bi-phone-fill'
    },
    {
      nome: 'Inovação e Gestão',
      svg: 'bi bi-people-fill'
    },
  ]

  return (
    <div className='main'>
      <Banner />
      <ThemeSelector alterarContextoGlobal={alterarContextoGlobal} />
      <Form temaState={temaState} times={times.map(time => time.nome)} onSubmitedColaborator={colaborador => onNewColaborator(colaborador)} />
      <h1 className='org'>Minha Organização</h1>
      {colaboradores.length === 0 ? (
        <div className='empty-div' style={{ color: temaState === '#bfbfbf' ? '#545454' : 'white' }}>
          <h3>Os colaboradores adicionados aparecerão aqui...</h3>
        </div>
      ) : (
        times.map(time =>
          <TeamContainer
            temaState={temaState}
            secondTemaState={secondTemaState}
            key={time.nome}
            nome={time.nome}
            icon={time.svg}
            colaboradores={colaboradores.filter(colaborador =>
              colaborador.time === time.nome
            )}
            onDeleteColaborator={onDeleteColaborator}
          />
        )
      )}
      <FooterComponent temaState={temaState} secondTemaState={secondTemaState} />
    </div>
  );
}

export default App;
