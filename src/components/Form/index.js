import "./Form.css"
import Options from "../Options"
import Input from "../InputText"

const Form = () => {
    return (
        <section className="container">
            <form className="form">
                <h2>Preencha os dados para criar o Card do Colaborador</h2>
                <Input label="Nome" />
                <Options label="Cargo" />
                <Input label="Endereço da Imagem" />
                <Options label="Time" />
            </form>
        </section>
    )
}

export default Form