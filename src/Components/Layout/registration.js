import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form Submitted`);
    console.log(`Name : ${name}`);
    console.log(`Description:${email}`)
  };


  const empinfo={
    regname:name,
    eemail:email,
    ppassword:password,
  
}
axios.post('http://localhost:4500/reg/register', empinfo)
   .then(res => {
          console.log(res.data);
          navigate('/');
   
});

setName('');
setEmail('');
setPassword('');

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;