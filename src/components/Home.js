import { useEffect } from 'react'
import Image from 'next/Image'
import sally from '../../public/images/sallytanyu.jpg'
import { scroll } from './Portfolio'

class RotateText {
    constructor(element, toRotate, period) {
        this.element = element
        this.toRotate = toRotate
        this.loopNumber = 0
        this.period = parseInt(period, 10) || 1
        this.text = ''
        this.tick()
    }
    tick() {
        const i = this.loopNumber % this.toRotate.length
        const fullText = this.toRotate[i]
        this.text = fullText.substring(0, this.text.length + 1)
        this.element.innerHTML = `<span class="wrap">` + this.text + "</span>"
        const that = this
        let delta = 120 - Math.random() * 100
        if (this.text === fullText) {
            delta = this.period
        }
        setTimeout(() => {
            that.tick()
        }, delta)
    }
}

const Home = () => {
    useEffect(() => {
        const elements = document.getElementsByClassName('s-text-rotate')
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-rotate')
            const period = elements[i].getAttribute('data-period')
            if (toRotate) {
                new RotateText(elements[i], JSON.parse(toRotate), period)
            }
        }
        const css = document.createElement('style')
        css.type = 'text/css'
        css.innerHTML = '.s-text-rotate > .wrap {border-right: 0.08em solid #666}'
        document.body.appendChild(css)
    }, [])

    return (
        <section id="s-home-section">
            <div className="s-home-container">
                <section className="s-home-image">
                    <Image src={sally} alt="image of sally tan" layout="raw" width={250} height={350} priority={true}/>
                </section>
                <article className="s-home-content">
                    <h1>Hi, my name is <span className="s-text-rotate" data-period="1" data-rotate='["Sally."]'></span></h1><br/>
                    <h1>Welcome to my Computer Science Portfolio.</h1>
                    <p>I am a <a href="https://en.wikipedia.org/wiki/Software_engineering" target="_blank" rel="noreferrer">Software Engineer</a> based in Florida.</p>
                    <p>My passion is to build <a href="https://en.wikipedia.org/wiki/Product_(business)" target="_blank" rel="noreferrer">products</a> that make our world a better place.</p>
                    <p>I am currently developing tools for a <a href="https://en.wikipedia.org/wiki/Educational_technology" target="_blank" rel="noreferrer">digital classroom</a> at Kiddom.</p>
                    <p>I code in JavaScript, <a href="https://en.wikipedia.org/wiki/Go_(programming_language)" target="_blank" rel="noreferrer">Go</a>, and Python.</p>
                    <p>I make <a href="https://www.youtube.com/channel/UCFES_O7aYbABx3D39tR4SaA" target="_blank" rel="noreferrer">videos</a> on algorithms and web development.</p>
                    <p>I won <a href="https://github.com/stanyu2013/Team-Zero---Data-Science-Futures-Hackathon" target="_blank" rel="noreferrer">1st Place</a> awards at several hackathons.</p>
                    <p>Come learn more about me here.</p><br/>
                    <a className="s-main-button" onClick={() => scroll('s-about-section')}>About Me</a>
                </article>
            </div>
        </section>
    )
}

export default Home
