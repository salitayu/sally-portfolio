import Image from 'next/Image'
import { scroll } from './Portfolio'

function Projects() {
    return (
        <div id="s-projects-section">
            <h1 className="s-projects-title">Projects</h1>
            <p className="s-projects-description">These are the projects I created during my free time. Most of them are business related since I strive to provide the most innovative, efficient solutions to the market.</p>
            <div className="s-projects-container">
              <div className="s-project-content">
                <div className="s-project-title">
                  <h1>EcomCart</h1>
                </div>
                <div className="s-project-images">
                  <Image src="/images/shoppingcart.jpg" alt="cart" layout="raw" priority={true} className="s-project-imagestohide" />
                  <Image src="/images/bulkadd.png" alt="add merchandise to ecommerce site" layout="raw" priority={true} className="s-project-imagestohide" />
                  <Image src="/images/shoppingcart.png" alt="shopping" layout="raw" priority={true} />
                </div>
                <p className="s-project-description">
                EcomCart is an interactive web application that helps people that want to start their business online. 
                Through EcomCart, businesses can manage their inventory,
                add or remove products in their virtual warehouse, and customize their online presence.
                Then, these businesses can allow their customers to create an account, shop for the products they want, add or remove from shopping cart, and pay for the 
                items they want to buy online.
                </p>
              </div>
              <div className="s-project-content">
                <div className="s-project-title">
                  <h1>ServiceAppointment</h1>
                </div>
                <div className="s-project-images">
                  <Image src="/images/smallbusiness.png" alt="small business" layout="raw" priority={true} className="s-project-imagestohide" />
                  <Image src="/images/smallbusiness1.png" alt="small business 1" layout="raw" priority={true} className="s-project-imagestohide" />
                  <Image src="/images/smallbusiness2.png" alt="small business 2" layout="raw" priority={true} />
                </div>
                <p className="s-project-description">
                ServiceAppointment is a web application that serves as a tool to help businesses set up service appointments to their customers. 
                This tool can provide appointments for any service ranging from home installation, tax preparation, computer repair, and any other service as long as an appointment is necessary.   
                ServiceAppointment allows businesses to add or remove services and set prices to the services. Then, their clients can select services, book appointments, and pay for the appointments online.  
                </p>
              </div>
              <div className="s-project-content">
                <div className="s-project-title">
                  <h1>TakeoutOrder</h1>
                </div>
                <div className="s-project-images">
                  <Image src="/images/restaurantorder4.png" alt="restaurant order 4" layout="raw" className="s-project-imagestohide" />
                  <Image src="/images/restaurantorder2.png" alt="restaurant order 2" layout="raw" className="s-project-imagestohide" />
                  <Image src="/images/restaurantorder5.png" alt="restaurant order 5" layout="raw" />
                </div>
                <p className="s-project-description">
                TakeoutOrder is a web portal that helps restaurant owners provide takeout services to their customers. Restaurants can update their menu, add or remove food items, and introduce their customers to their restaurants.
                Customers can create an account, browse through the food menu, select sizes, portions, combos, and purchase food through this portal.
                </p>
              </div>
            </div>
            <br />
            <h1 className="s-teamprojects-title">Hackathons</h1>
            <p className="s-teamprojects-description">These are the hackathon projects I created during the weekends with my team. Most of them are creative in nature because we were having fun. These are MVPs and some of them have won us awards.</p>
            <div className="s-teamproject-container">
              <div className="s-teamproject-content">
                <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw" />
                <h1 className="s-teamproject-title">SheekDance</h1>
                <p className="s-teamproject-description">
                  SheekDance selects music to play according to the scene shown in pictures. This app allows you to take a picture
                  and it will perform a predictive analysis on the contents of the image to play music that suits the ambiance. While the app plays the music,
                  our cute cozmo robot busts a move to the tunes.
                </p>
              </div>
              <div className="s-teamproject-content">
                <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw" />
                <h1 className="s-teamproject-title">ScanAlert</h1>
                <p className="s-teamproject-description">
                  ScanAlert scans barcodes and determines whether that product
                  contains ingredients the user is allergic to or conscious about
                  eating based on the information they have entered. This application
                  was built to promote a healthier lifestyle and inform consumers
                  about the foods they eat.
                </p>
              </div>
              <div className="s-teamproject-content">
              <Image src="/images/scanalertcopy.jpg" alt="scanalert" layout="raw" />
              <h1 className="s-teamproject-title">Cura</h1>
              <p className="s-teamproject-description">
                Cura takes the insurance coverage information of a user and combines it
                with a diagnosis it creates based on their symptoms of
                sickness. A host of the nearest relevant doctors for the patient to
                visit is then produced. From here, the user can view each doctor and
                their contact information.
              </p>
              </div>
            </div>
            <br/>
            <a className="s-main-button" onClick={() => scroll('s-contact-section')}>Contact Me</a>
    </div>
    )
}

export default Projects
