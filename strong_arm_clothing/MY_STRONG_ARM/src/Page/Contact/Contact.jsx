import React from 'react';
import './Contact.css'; // Add your custom CSS here or import a pre-made one for the contact form

const Contact = () => {
  return (
    <div>
     

      <section id="page-header" className="about-header">
        <h2>#get Intouch!</h2>
        <marquee bgcolor="#ccc" loop="-2" scrollamount="6" width="100%">
          LEAVE US A MESSAGE. We love to hear from you!
        </marquee>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>VISIT ONE OF LOCATIONS OR CALL US TODAY</h2>
          <h3>HEAD OFFICE</h3>
          <div>
            <li><i className="fal fa-map"></i><p>South Africa</p></li>
            <li><i className="fal fa-envelope"></i><p>sabimarudevo@gmail.com</p></li>
            <li><i className="fal fa-phone-alt"></i><p>Tel: 011-789-00</p></li>
            <li><i className="far fa-clock"></i><p>Monday-Friday: 8am - 5pm</p></li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6766387944404!2d28.085545675972117!3d-26.10947226012369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d2f1c3b62a5%3A0x6a0f66ee5e5579a2!2sClicks%20Pan%20Africa%20Mall!5e0!3m2!1sen!2sza!4v1735477609009!5m2!1sen!2sza"
            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We'd love to hear from you!</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src="Images/people/1.png" alt="Person" />
            <p><span>Sabimaru</span> Marketing Manager <br /> Phone: +277980765b<br /> Email: sabimarudevos@gmail.com</p>
          </div>
        </div>
        <div className="people">
          <div>
            <img src="Images/people/1.png" alt="Person" />
            <p><span>Sabimaru</span> Marketing Manager <br /> Phone: +277980765b<br /> Email: sabimarudevos@gmail.com</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
