import { useState } from 'react'
import './ThemeSelector.css'

const ThemeSelector = (props) => {

    const [temaState, setTemaState] = useState('roxo')

    const alterarContexto = (tema, mainColor, secondColor) => {
        setTemaState(tema)
        const banner = document.getElementById('banner')
        const bannerHeader = document.querySelector('.banner')
        const form = document.querySelector('.container-form')
        const botao = document.querySelector('.botao')
        if (document.documentElement) {
            console.log('Alterando o contexto')
            if (tema !== 'claro') {
                document.documentElement.style.backgroundColor = '#1a1d33'
                bannerHeader.style.backgroundColor = '#101220'
                bannerHeader.style.boxShadow = '0px 5px 10px #101220'
            } else {
                document.documentElement.style.backgroundColor = '#ffffff'
                bannerHeader.style.backgroundColor = '#bfbfbf'
                bannerHeader.style.boxShadow = '0px 5px 10px #bfbfbf'
            }
            
            form.style.borderColor = mainColor
            botao.style.borderColor = mainColor
            botao.style.color = mainColor
            if (tema !== 'claro') {
                form.style.backgroundColor = '#101220'
            } else {
                form.style.backgroundColor = '#545454'
            }

            if (banner) {
                console.log('Alterando o banner')
                banner.setAttribute('src', `/images/banner-${tema}.png`)
            }
            console.log('Tema alterado => ', tema)
        }
    }

    const temas = [
        {
            tema: 'roxo',
            cor: '#a60eec',
            mainColor: '#a60eec',
            secondColor: '#a60eec',
        },
        {
            tema: 'azul',
            cor: '#33fff7',
            mainColor: '#0cc0df',
            secondColor: '#a60eec',
        },
        {
            tema: 'verde',
            cor: '#33ff57',
            mainColor: '#7ed957',
            secondColor: '#a60eec',
        },
        {
            tema: 'vermelho',
            cor: '#FF0000',
            mainColor: '#ff3131',
            secondColor: '#a60eec',
        },
        {
            tema: 'laranja',
            cor: '#ffa500',
            mainColor: '#ff914d',
            secondColor: '#a60eec',
        },
        {
            tema: 'claro',
            cor: '#f5f5f5',
            mainColor: '#bfbfbf',
            secondColor: '#545454',
        },
    ]

    return (
        <div className="radio-group">
            <h4>Tema</h4>
            {temas.map(tema =>
                <div className="quadrante-cor"
                    key={tema.tema}
                    onClick={() => alterarContexto(tema.tema, tema.mainColor, tema.secondColor)}
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
