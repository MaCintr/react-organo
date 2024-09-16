import { useState, useEffect } from 'react'
import './ThemeSelector.css'

const ThemeSelector = ({ alterarContextoGlobal }) => {

    const alterarContexto = (tema, mainColor, secondColor) => {
        alterarContextoGlobal(mainColor, secondColor)
        const banner = document.getElementById('banner')
        const bannerHeader = document.querySelector('.banner')
        const form = document.querySelector('.container-form')
        const botao = document.querySelector('.botao')
        const formTitle = document.querySelector('.form-title')
        const orgTitle = document.querySelector('.org')

        if (bannerHeader && form && botao) {
            console.log('Alterando o contexto')
            
            document.documentElement.style.backgroundColor = tema !== 'claro' ? '#1a1d33' : '#f5f5f5'
            bannerHeader.style.backgroundColor = tema !== 'claro' ? '#101220' : '#bfbfbf'
            bannerHeader.style.boxShadow = `0px 5px 10px ${tema !== 'claro' ? '#101220' : '#bfbfbf'}`
            formTitle.style.color = tema !== 'claro' ? '#ffffff' : '#545454'
            orgTitle.style.color = tema !== 'claro' ? '#ffffff' : '#545454'

            form.style.borderColor = mainColor
            botao.style.borderColor = mainColor
            botao.style.color = mainColor
            form.style.backgroundColor = tema !== 'claro' ? '#101220' : '#545454'

            if (banner) {
                console.log('Alterando o banner')
                banner.setAttribute('src', `/images/banner-${tema}.png`)
            }
        }
    }

    const temas = [
        { tema: 'roxo', cor: '#a60eec', mainColor: '#a60eec', secondColor: '#7803ad' },
        { tema: 'azul', cor: '#33fff7', mainColor: '#0cc0df', secondColor: '#0097b2' },
        { tema: 'verde', cor: '#33ff57', mainColor: '#7ed957', secondColor: '#00bf63' },
        { tema: 'vermelho', cor: '#FF0000', mainColor: '#fd5a5b', secondColor: '#ff383b' },
        { tema: 'laranja', cor: '#ffa500', mainColor: '#ff914d', secondColor: '#d24401' },
        { tema: 'claro', cor: '#f5f5f5', mainColor: '#bfbfbf', secondColor: '#616161' },
    ]

    useEffect(() => {
        alterarContexto('roxo', '#a60eec', '#a60eec')
    }, [])

    return (
        <div className="radio-group">
            <h4>Tema</h4>
            {temas.map((tema) => (
                <div
                    className="quadrante-cor"
                    key={tema.tema}
                    onClick={() => alterarContexto(tema.tema, tema.mainColor, tema.secondColor)}
                    style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: tema.cor,
                        cursor: 'pointer',
                        border: 'none',
                        borderRadius: '5px',
                        margin: '5px',
                    }}
                />
            ))}
        </div>
    )
}

export default ThemeSelector
