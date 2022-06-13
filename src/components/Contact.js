import { useEffect } from "react"

function Contact() {
    const checkForm = () => {
        const form = document.querySelector('form')
        form.addEventListener('keyup', function() {
            const name = document.getElementById('contact-name').value
            const email = document.getElementById('contact-email').value
            const message = document.getElementById('contact-message').value
            const sendButton = document.getElementsByClassName('s-main-button')
            const send = sendButton[sendButton.length-1]
            if (name !== '' && email !== '' && message !== '') {
                send.removeAttribute('disabled')
            } else {
                send.setAttribute('disabled', 'disabled')
            }
        })
    }
    useEffect(() => {
        checkForm()
    }, [])
    return (
        <div id="s-contact-section">
            <h1>Contact Me</h1>
            <p>Like my work? Connect with me about your business ideas, and I can help meet your goals.</p>
            <br/><br/>
            <form action="https://formsubmit.co/8a30119d1ccc457d899d2e3316c3f72e" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="contact-name" placeholder="Jane Doe" name="name"/>
                <label htmlFor="email">Email</label>
                <input type="text" id="contact-email" placeholder="janedoe@gmail.com" name="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" style={{height: '200px'}} id="contact-message" placeholder="Hey Sally, let's build a web app together."></textarea>
                <input type="hidden" name="_captcha" value="false"></input>
                <button className="s-main-button" type="submit" id="sendButton">Send</button>
            </form>
        </div>
    )
}

export default Contact
