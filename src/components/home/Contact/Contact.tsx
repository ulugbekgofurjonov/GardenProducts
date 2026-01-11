import Link from "next/link";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact container">
      <h2>Contact</h2>
      <div className="top">
        <div className="item">
          <span>Phone</span>
          <h3>+7 (499) 350-66-04</h3>
        </div>
        <div className="socials">
          <div className="span">
            <span>Socials</span>
          </div>
          <Link href="">
            <img src="./Images/HomePageIMG/instagram.png" alt="" />
          </Link>
          <Link href="">
            <img src="./Images/HomePageIMG/whatsapp.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="address">
          <span>Address</span>
          <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
        </div>
        <div className="hours">
          <span>Working Hours</span>
          <h3>24 hours a day</h3>
        </div>
      </div>

      <div className="map">
        <iframe className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3827438524876!2d37.61474931592464!3d55.75576998055387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5d8e8e8e8f%3A0x1234567890abcdef!2sIThub%20college!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
