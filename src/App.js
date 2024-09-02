import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const onNewColaborator = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    
  }

  return (
    <div>
      <Banner/>
      <Form onSubmitedColaborator={colaborador => onNewColaborator(colaborador)}/>
    </div>
  );
}

export default App;
