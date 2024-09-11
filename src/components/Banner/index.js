import "./Banner.css"
import ThemeSelector from "../ThemeSelector"

function Banner() {
    return (
        <header className="banner">
        <img src="/images/BannerPurple.png" alt="Banner"/>
        <ThemeSelector/>
        </header>
    )
}

export default Banner