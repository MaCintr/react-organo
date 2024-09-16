import './FooterComponent.css'

const FooterComponent = (props) => {

    var estiloIcone = { color: props.temaState === '#bfbfbf' ? '#101220' : 'white' }

    return (
        <footer className='footer'
            style={{
                backgroundColor: props.temaState === '#bfbfbf' ? 'white' : '#101220',
                color: props.temaState === '#bfbfbf' ? '#101220' : 'white',
            }}>
            <span>&copy; 2024 Marcelo Amarante Cintra.<br />Todos os direitos reservados.</span>
            <span className='socials'>Entre em contato<br />
                <a href=''><i style={estiloIcone} className="bi bi-instagram"></i></a>
                <a><i style={estiloIcone} className="bi bi-linkedin"></i></a>
                <a><i style={estiloIcone} className="bi bi-github"></i></a>
                <a><i style={estiloIcone} className="bi bi-envelope"></i></a>
            </span>
        </footer>
    )
}

export default FooterComponent