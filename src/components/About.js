import { scroll } from './Portfolio'

const About = () => {
    return (
        <div id="s-about-section">
            <div className="s-about-container">
                <div className="s-about-content">
                    <h1>About Me</h1>
                    <p>My fascination for tech began back in high school when I decided to take a Graphic Web Page Design elective that was offered at my school. 
                        I started my journey by using Adobe Creative Suite to design everything from shirts to yearbooks.
                        Then, I became proficient in HTML and CSS to create my first websites. 
                        I spent hours after class investigating how to create scrolling and navbar animations for my personal website. 
                        On weekends, I would try to figure out how to make my site more interactive by having a cart and sending emails.</p>
                    <p>That was how I discovered PHP and JavaScript. 
                        I enjoyed it so much I went on to major in Computer Science to dive deep into the technical details of programming. 
                        After I graduated, I started working as a Software Engineer in various industries related to edtech, aerospace, biometrics, and logistics. 
                        I also was able to contribute to Booz Allen Hamilton Data Science Futures Hackathon and Florida Tech Major League Hackathon where my team and I won first place.
                        I am lucky to be part of these amazing industries that help shape the world and feel extremely grateful to have the opportunity to develop my craft along the way. 
                        Check out some of my works and projects below.</p>
                    <br/>
                    <a className="s-main-button" onClick={() => scroll('s-work-section')}>Work</a>
                </div>
            </div>
        </div>
    )
}

export default About
