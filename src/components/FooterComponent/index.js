import './FooterComponent.css'

const FooterComponent = (props) => {

    var estiloIcone = { color: props.temaState === '#bfbfbf' ? '#101220' : 'white' }

    return (
        <footer className='footer'
            style={{
                backgroundColor: props.temaState,
                color: props.temaState === '#bfbfbf' ? '#101220' : 'white',
            }}>
            <span>&copy; 2024 Marcelo Amarante Cintra.<br/>Todos os direitos reservados.</span>
            <span className='socials'>Entre em contato<br/>
                <i style={estiloIcone} className="bi bi-instagram"></i>
                <i style={estiloIcone} className="bi bi-linkedin"></i>
                <i style={estiloIcone} className="bi bi-github"></i>
                <i style={estiloIcone} className="bi bi-envelope"></i></span>
        </footer>
    )
}

export default FooterComponent