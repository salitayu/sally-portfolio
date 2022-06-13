import Image from 'next/image'
import logo from '../../public/images/logo.png'
import { useEffect } from 'react'
import { scroll } from './Portfolio'

function Header () {
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 1000px)')

        mq.addEventListener('change', (e) => {
            if (e.matches) {
                document.getElementById('s-navbar-toggle').checked = false
            }
        })

        document.body.onresize = function() {
            document.getElementsByClassName('s-navbar-menu')[0].style.transition = 'none'
            setTimeout(() => {
                document.getElementsByClassName('s-navbar-menu')[0].style.transition = '0.2s'
            }, 1000)
        }

        for (let item of document.getElementsByClassName('s-navbar-items')) {
            item.addEventListener('click', () => {
                document.getElementById('s-navbar-toggle').checked = false
            })
        }
        
        document.body.addEventListener('click', (event) => {
          const navbarToggleElement = document.getElementById('s-navbar-toggle')
          const navbarMenu = document.getElementsByClassName('s-navbar-menu')[0]
          const style = window.getComputedStyle(navbarMenu)
          const navbarMenuWidth = style.getPropertyValue('width')
          if (event.target !== navbarToggleElement || 
            (event.target === navbarToggleElement && navbarMenuWidth !== '0px')) {
            document.getElementById('s-navbar-toggle').checked = false
          }
        })

    }, [])

    return (
        <nav className="s-navbar-header">
            <input id="s-navbar-toggle" type="checkbox"></input>
            <label htmlFor="s-navbar-toggle" className="s-burger-icon">
                <div className="s-burger-line"></div>
                <div className="s-burger-line"></div>
                <div className="s-burger-line"></div>
            </label>
            <div className="s-header-logo"><a id="s-header-details" onClick={() => scroll('s-home-section')}>
                <Image className="s-logo-image" src={logo} height={50} width={50} alt="logo" />
                <span className="s-logo-text">Sally</span></a>
            </div>
            <ul className="s-navbar-menu">
            <li className="s-navbar-items" onClick={() => scroll('s-home-section')}><i className="fa-solid fa-house-chimney"></i>Home</li>
                <li className="s-navbar-items" onClick={() => scroll('s-about-section')}><i className="fa-solid fa-computer"></i>About</li>
                <li className="s-navbar-items" onClick={() => scroll('s-work-section')}><i className="fa-solid fa-briefcase"></i>Work</li>
                <li className="s-navbar-items" onClick={() => scroll('s-projects-section')}><i className="fa-solid fa-lightbulb"></i>Projects</li>
                <li className="s-navbar-items" onClick={() => scroll('s-contact-section')}><i className="fa-solid fa-address-card"></i>Contact</li>
            </ul>
            <ul className="s-navbar-social">
                <a className="s-navbar-sociallinks" href="https://www.youtube.com/channel/UCFES_O7aYbABx3D39tR4SaA" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                <a className="s-navbar-sociallinks" href="https://github.com/stanyu2013" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a className="s-navbar-sociallinks" href="https://www.linkedin.com/sally-tan-a7018b57" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            </ul>
        </nav>
    )
}

export default Header
