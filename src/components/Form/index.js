import "./Form.css"
import Options from "../Options"
import Input from "../InputText"
import ButtonElement from "../ButtonElement"
import { useState } from "react"

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX & Design',
        'Mobile',
        'Inovação e Gestão'
    ]


    const onSave = (event) => {
        event.preventDefault()
        console.log('Formulário Submetido:')
        console.log('Nome => ', nome)
        console.log('Cargo => ', cargo)
        console.log('Endereco da img => ', img)
        console.log('Time => ', time)
        props.onSubmitedColaborator({
            nome,
            cargo,
            img,
            time
        })

    }


    return (
        <div className="main">
            <h1>Formulário do Colaborador</h1>
            <section className="container">
                <form className="form" onSubmit={onSave}>
                    <h2>Preencha os dados para criar o Card do Colaborador:</h2>
                    <Input label="Nome" valor={nome} onChangeValue={valor => setNome(valor)} />
                    <Input label="Cargo" valor={cargo} onChangeValue={valor => setCargo(valor)} />
                    <Input label="Imagem (Cole o endereço da imagem)" valor={img} onChangeValue={valor => setImg(valor)} />
                    <Options label="Time" valor={time} onChangeValue={valor => setTime(valor)} itens={times} />
                    <ButtonElement>
                        Criar Card
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="add-icon" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></ButtonElement>
                </form>
            </section>
        </div>
    )
}

export default Form