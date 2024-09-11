import "./Banner.css"
import ThemeSelector from "../ThemeSelector"

function Banner() {
    return (
        <header className="banner">
        <img id="banner" src="/images/banner-roxo.png" alt="Banner"/>
        <ThemeSelector/>
        </header>
    )
}

export default Banner