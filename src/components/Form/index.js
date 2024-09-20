import { useState, useEffect } from "react";
import "./Form.css";
import Options from "../Options";
import Input from "../InputText";
import ButtonElement from "../ButtonElement";
import SelectColor from "../SelectColor";

const Form = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [img, setImg] = useState('');
    const [time, setTime] = useState('');
    const [cor, setCor] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const colorOptions = ['#a60eec', '#ff0000', '#33FF57', '#3357FF', '#ffff00', '#808080', '#FF33A1', '#33FFF7', '#8D33FF', '#ffa500'];

    useEffect(() => {
        if (showWarning) {
            const timer = setTimeout(() => {
                setShowWarning(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showWarning]);

    const onSave = (event) => {
        event.preventDefault();

        if (cor !== '') {
            console.log('Formulário Submetido:');
            console.log('Nome => ', nome);
            console.log('Cargo => ', cargo);
            console.log('Endereco da img => ', img);
            console.log('Time => ', time);
            console.log('Cor => ', cor);

            props.onSubmitedColaborator({
                nome,
                cargo,
                img,
                time,
                cor
            })

            setNome('')
            setCargo('')
            setImg('')
            setTime('')
            setCor('')

            const cores = document.querySelectorAll('.quadrante-cor');

            cores.forEach(cor => {
                cor.style.height = '30px';
                cor.style.width = '30px';
                cor.style.border = 'none';
            });


            setShowWarning(true);
        } else {
            window.alert('Selecione a cor do Card');
        }
    };

    return (
        <div className="main-form">
            <h1 className="form-title">Formulário do Colaborador</h1>
            {showWarning && <div className="warning"><i class="bi bi-check-circle-fill check"></i>Card criado com sucesso!</div>}
            <section className="container-form">
                <form className="form" onSubmit={onSave}>
                    <h2>Preencha os dados para criar o Card do Colaborador:</h2>
                    <Input temaState={props.temaState} label="Nome" valor={nome} onChangeValue={valor => setNome(valor)} />
                    <Input temaState={props.temaState} label="Cargo" valor={cargo} onChangeValue={valor => setCargo(valor)} />
                    <Input temaState={props.temaState} label="Username do Github" valor={img} onChangeValue={valor => setImg(valor)} />
                    <Options temaState={props.temaState} label="Time" valor={time} onChangeValue={valor => setTime(valor)} itens={props.times} />
                    <SelectColor colors={colorOptions} valor={cor} onChangeValue={valor => setCor(valor)} />
                    <ButtonElement>
                        Criar Card
                    </ButtonElement>
                </form>
            </section>
        </div>
    );
};

export default Form;
