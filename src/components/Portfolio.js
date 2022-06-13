import Header from './Header'
import Home from './Home'
import About from './About'
import Work from './Work'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function Portfolio () {
    return (
        <div className="s-main-portfolio">
            <Header />
            <Home />
            <About />
            <Work />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export const scroll = (elementId) => {
    const element = document.getElementById(elementId)
    element.scrollIntoView({behavior: "smooth", block: "start"})
}
