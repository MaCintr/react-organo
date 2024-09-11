import './ThemeSelector.css'

const ThemeSelector = (props) => {

    const temas = [
        {
            tema: 'Roxo',
            cor: '#a60eec'
        },
        {
            tema: 'Azul',
            cor: '#33fff7'
        },
        {
            tema: 'Verde',
            cor: '#33ff57'
        },
        {
            tema: 'Vermelho',
            cor: '#FF0000'
        },
        {
            tema: 'Laranja',
            cor: '#ffa500'
        },
        {
            tema: 'Claro',
            cor: '#f5f5f5'
        },
    ]

    return (
        <div className="radio-group">
            <h4>Tema</h4>
            {temas.map(tema =>
                <div className="quadrante-cor"
                    key={tema.nome}
                    style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: tema.cor,
                        cursor: 'pointer',
                        border: 'none',
                        borderRadius: '5px',
                        margin: '5px'
                      }}
                />
            )}
        </div>
    );
}

export default ThemeSelector;