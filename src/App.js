import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import TeamContainer from './components/TeamContainer';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const onNewColaborator = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])

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
      <Form times={times.map(time => time.nome)} onSubmitedColaborator={colaborador => onNewColaborator(colaborador)} />
      <h1 className='org'>Minha Organização</h1>
      {times.map(time =>
        <TeamContainer
          key={time.nome}
          nome={time.nome}
          icon={time.svg}
          colaboradores={colaboradores.filter(colaborador =>
            colaborador.time == time.nome
          )}
        />)}
    </div>
  );
}

export default App;
