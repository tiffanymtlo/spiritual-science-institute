import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <hr className='contact-us-divider' />
      <div className="contact-content">
        <div className="contact-details">
          <div>
            <WhatsAppIcon />
            <PhoneIcon />
            <p> +852 6802 6168</p>
          </div>
          <div>
            <MailOutlineIcon />
            <p> pallasng@ichingspiritual.com</p>
          </div>
          <div>
            <LaptopMacIcon />
            <p> https://www.ichingspiritual.com</p>
          </div>
        </div>
        <p>Hong Kong</p>
      </div>
    </section>
  );
}

export default ContactUs;
