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

  return (
    <div className='main'>
      <Banner />
      <Form onSubmitedColaborator={colaborador => onNewColaborator(colaborador)} />
        <h1>Minha Organização</h1>
      <TeamContainer nome="Programação" />
      <TeamContainer nome="Front-end" />
      <TeamContainer nome="Data Science" />
    </div>
  );
}

export default App;
