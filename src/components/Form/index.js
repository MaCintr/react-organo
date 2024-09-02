import "./Form.css"
import Options from "../Options"
import Input from "../InputText"
import ButtonElement from "../ButtonElement"

const Form = () => {

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
        console.log('Formulário Submetido')
    }


    return (
        <div className="main">
            <section className="container">
                <form className="form" onSubmit={onSave}>
                    <h2>Preencha os dados para criar o Card do Colaborador</h2>
                    <Input label="Nome" />
                    <Input label="Cargo" />
                    <Input label="Endereço da Imagem" />
                    <Options label="Time" itens={times} />
                    <ButtonElement>Criar Card</ButtonElement>
                </form>
            </section>
        </div>
    )
}

export default Form