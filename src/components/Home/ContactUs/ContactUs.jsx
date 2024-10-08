import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import textsEng from '../../../texts/strings_eng';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>{textsEng['home.contactUs.title']}</h2>
      <hr className='contact-us-divider' />
      <div className="contact-content">
        <div className="contact-details">
          <div>
            <WhatsAppIcon />
            <PhoneIcon />
            <p> {textsEng['home.contactUs.phoneNumber']}</p>
          </div>
          <div>
            <MailOutlineIcon />
            <p> {textsEng['home.contactUs.email']}</p>
          </div>
          <div>
            <LaptopMacIcon />
            <p> {textsEng['home.contactUs.website']}</p>
          </div>
        </div>
        <p>{textsEng['home.contactUs.location']}</p>
      </div>
    </section>
  );
}

export default ContactUs;
