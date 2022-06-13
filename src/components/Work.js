import Image from 'next/Image'
import { scroll } from './Portfolio'

const Work = () => {
    return (
        <div id="s-work-section">
            <div className="s-main-section">
                <h1>Work</h1>
                <div className="s-work-section">
                    <section className="s-work-image">
                        <Image src="/images/kiddom.jpg" alt="classroom" layout="raw" priority={true} />
                    </section>
                    <article className="s-work-content">
                        <p className="s-work-title"><strong>Kiddom </strong> <i>May 2021 - Present</i></p>
                        <p className="s-work-description">I am a Product Engineer at Kiddom, an educational technology startup that unlocks potential for teachers and students. 
                            At Kiddom, I develop video, chat, and drawing tools to enable users to communicate in a digital classroom setting. 
                            I work with my team to brainstorm ways to implement new features on our app and turn our ideas into reality.
                            I also create dashboards to analyze data with product managers and increase our user activity.
                            I conduct standup meetings, sprint plannings, and reviews every few weeks as the rotating scrum lead.
                            Working on both the frontend and backend, I am creating user interfaces for web applications and implementing API requests.
                            I present my work to stakeholders and contribute to discussions to improve our software process.
                        </p>
                    </article>
                </div>
                <div className="s-work-section">
                <section className="s-work-image">
                    <Image src="/images/thales.png" alt="airplane" layout="raw" priority={true} />
                </section>
                <article className="s-work-content">
                    <p className="s-work-title"><strong>Thales </strong> <i>Sep 2016 - May 2021</i></p>
                    <p className="s-work-description">Previously, I worked on the Ground Software team at Thales,
					focusing on their suite of Business Application Products.
					I built connected inflight entertainment systems, connectivity solutions,
					and digital services that connect and inspire people throughout their journey.
					I helped create, process, and gather data that came to and from aircrafts.
					I also built web applications and tools to monitor connectivity for aircrafts.
                    I enabled swift software deployment changes and generated playlists onto in flight entertainment systems.
                    After 4 years, I moved to the biometric fingerprint scanning department and helped develop a desktop application for companies all around the world.</p>
                </article>
                </div>
                <div className="s-work-section">
                <section className="s-work-image">
                    <Image src="/images/ctg.png" alt="macbook" layout="raw" priority={true} />
                </section>
                <article className="s-work-content">
                    <p className="s-work-title"><strong>Computer Task Group </strong> <i>May 2016 - Aug 2016</i></p>
                    <p className="s-work-description">At Computer Task Group, I assisted in building a warehouse management application for one of the largest food and beverage manufacturers in
                    the world. I designed the system to increase velocity, space utilization, productivity, and reduce complexity of warehouse
                    management and overall operational cost. I created interfaces to handle automated material equipment and strategic reporting, to seamlessly communicate with to other systems and devices.
                    Also, I created UIs for the login, logistics portions of the app and converted the desktop application into a modern web application.
                    I programmed according to the needs of clients and high-level design documents.
                    </p>
                </article>
                </div>
                <div className="s-work-section">
                <section className="s-work-image">
                    <Image src="/images/dycom.png" alt="aerialview" layout="raw" priority={true} />
                </section>
                <article className="s-work-content">
                    <p className="s-work-title"><strong>Dycom Industries </strong> <i>Jun 2015 - Aug 2015</i></p>
                    <p className="s-work-description">I was a full stack sofware developer at Dycom Industries
                        for a summer. Dycom Industries supplies telecommunications services to its
                        customers. At Dycom, I built a self-service web portal interface
                        for administrators to configure, maintain, and review product licenses in an underground utility sketching app. I
                        developed the portal for customers to review licensing usage
                        information and secured the portal by authenticating users and
                        authorizing them to their respective roles & permissions.
                    </p>
                </article>
            </div>
            <div className="s-work-section">
            <section className="s-work-image">
                <Image src="/images/operationsmile.png" alt="smile" layout="raw" priority={true} />
            </section>
            <article className="s-work-content">
                <p className="s-work-title"><strong>Operation Smile </strong> <i>Aug 2016 - May 2016</i></p>
                <p className="s-work-description"> At Operation Smile, I developed a
                multi-platform application for surgeons to store personal information of cleft palate patients
                and follow up on their surgery. Operation Smile is a nonprofit medical service organization aimed
                towards helping remote patients. Data collected
                was analyzed by Operation Smile and the World Health
                Organization to increase cleft surgical success rate.
                </p>
            </article>
        </div>
        <br/>
        <a className="s-main-button" onClick={() => scroll('s-projects-section')}>Projects</a>
        </div>
        </div>
    )
}

export default Work
