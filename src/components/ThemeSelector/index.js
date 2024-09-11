import './ThemeSelector.css'

const ThemeSelector = (props) => {
    const html = document.querySelector('html')
    const banner = document.getElementById('banner')

    const alterarContexto = (contexto) => {
        html.setAttribute('data-contexto', contexto)
        html.setAttribute('banner-bg', contexto)
        banner.setAttribute('src', `/images/banner-${contexto}.png`)
        console.log('Tema alterado => ', contexto)
    }

    const temas = [
        {
            tema: 'roxo',
            cor: '#a60eec'
        },
        {
            tema: 'azul',
            cor: '#33fff7'
        },
        {
            tema: 'verde',
            cor: '#33ff57'
        },
        {
            tema: 'vermelho',
            cor: '#FF0000'
        },
        {
            tema: 'laranja',
            cor: '#ffa500'
        },
        {
            tema: 'claro',
            cor: '#f5f5f5'
        },
    ]

    return (
        <div className="radio-group">
            <h4>Tema</h4>
            {temas.map(tema =>
                <div className="quadrante-cor"
                    key={tema.tema}
                    onClick={() => alterarContexto(tema.tema)}
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
