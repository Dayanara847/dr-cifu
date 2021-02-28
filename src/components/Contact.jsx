import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendMail } from '../slice/contactSlice';

function Contact() {
    const [state, setstate] = useState({
    name: '',
    email: '',
    message: '',
  });
  const dispatch = useDispatch();

  function handleOnChange(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(state)
    dispatch(sendMail);
  }

return (
    <div className="contactForm">
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="name"
          label="Nombre"
          type="string"
          required
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
                <TextField
          name="email"
          label="e-mail"
          type="string"
          required
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <TextField
          name="message"
          label="Mensaje"
          type="string"
          required
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}

export default Contact;
