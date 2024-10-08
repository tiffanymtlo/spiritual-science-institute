import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from "@mui/material";
import Button from '../shared/Button';
import textsEng from '../../texts/strings_eng';
import './ContactUsPage.css';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Standard variant TextField
          "& .MuiInput-root": {
            color: "#2e2e2e",
            fontFamily: "Lato, sans-serif",
            fontWeight: "bold",
            "&:before": {
              borderColor: "#2e2e2e",
              borderWidth: "2px",
            },
            "&:after": {
              borderColor: "#ED5B20",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-standard": {
            color: "#2e2e2e",
            fontFamily: "Lato, sans-serif",
            fontWeight: "100",
            "&.Mui-focused": {
              color: "#ED5B20",
            },
          },
        },
      },
    },
  },
});

const ContactUsPage = () => {
  const [successToasterOpen, setSuccessToasterOpen] = useState(false);
  const [errorToasterOpen, setErrorToasterOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSuccessToasterClose = () => {
    setSuccessToasterOpen(false);
  };

  const handleErrorToasterClose = () => {
    setErrorToasterOpen(false);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      to_name: 'SpiritualScience Institute',
      user_name: name,
      user_email: email,
      user_phone: phoneNumber,
      message,
    };

    emailjs
      .send('contact_service', 'contact_form', templateParams, {
        publicKey: '0td7SbN-M4v-nPqFh',
      })
      .then(
        (response) => {
          setSuccessToasterOpen(true);
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setErrorToasterOpen(true);
          console.log('FAILED...', err);
        },
      );
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us-page-header">
        <h1>{textsEng['contactUsPage.header.title']}</h1>
        <p>{textsEng['contactUsPage.header.subtitle']}</p>
      </div>
      {successToasterOpen && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={true}
          onClose={handleSuccessToasterClose}
        >
          <Alert
            onClose={handleSuccessToasterClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {textsEng['contactUsPage.successToaster']}
          </Alert>
        </Snackbar>
      )}
      {errorToasterOpen && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={true}
          onClose={handleErrorToasterClose}
        >
          <Alert
            onClose={handleErrorToasterClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {textsEng['contactUsPage.errorToaster']}
          </Alert>
        </Snackbar>
      )}
      <div className="contact-us-page-content">
        <form className="contact-us-page-form">
          <div className="contact-us-page-info">
            <div>
              <WhatsAppIcon />
              <PhoneIcon />
              <h4> {textsEng['home.contactUs.phoneNumber']}</h4>
            </div>
            <div>
              <MailOutlineIcon />
              <h4> {textsEng['home.contactUs.email']}</h4>
            </div>
          </div>
          <div className="contact-us-page-fields-container">
            <ThemeProvider theme={theme}>
              <TextField
                required
                id="name-input"
                label={textsEng['contactUsPage.form.name']}
                type="text"
                variant="standard"
                color="secondary"
                className="contact-us-page-form-field"
                value={name}
                onChange={onNameChange}
              />
              <TextField
                required
                id="email-input"
                label={textsEng['contactUsPage.form.email']}
                type="email"
                variant="standard"
                color="secondary"
                className="contact-us-page-form-field"
                value={email}
                onChange={onEmailChange}
              />
              <TextField
                required
                id="phone-number-input"
                label={textsEng['contactUsPage.form.phoneNumber']}
                type="tel"
                variant="standard"
                color="secondary"
                helperText={textsEng['contactUsPage.form.phoneNumber.helperText']}
                className="contact-us-page-form-field"
                value={phoneNumber}
                onChange={onPhoneNumberChange}
              />
              <TextField
                required
                id="message-input"
                label={textsEng['contactUsPage.form.message']}
                type="multiline"
                variant="standard"
                color="secondary"
                className="contact-us-page-form-field"
                value={message}
                onChange={onMessageChange}
              />
            </ThemeProvider>
            <Button type="submit" onClick={onSubmit}>{textsEng['contactUsPage.form.submit.button']}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
