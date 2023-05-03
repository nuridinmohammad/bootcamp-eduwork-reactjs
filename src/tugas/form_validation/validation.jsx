import React, { useState } from "react";
import {style} from './style'

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

const Input = ({ label, type, name, onChange, ...rest }) => {
  return (
    <div style={{ width: "98%" }}>
      <label>{label}:</label>
      <br />
      <input
        style={{ width: "100%" }}
        type={type}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

const validation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState([]);
  let message = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /^\w+([\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.length === 0) message = [...message, "Email Tidak Boleh Kosong!"];
    if (password.length === 0)
      message = [...message, "Password Tidak Boleh Kosong!"];
    if (re.test(String(email).toLocaleLowerCase()))
      message = [...message, "Email Tidak Valid"];
    if (password.length < 5)
      message = [...message, "Panjang Password Harus Lebih dari 5"];
    if (message.length > 0) {
      setError(message);
    } else {
      alert(`email : ${email}\npassword : ${password}`);
    }
    setError(message);
  };


  return (
    <div style={style}>
      {errors && <ShowErrors errors={errors} />}
      <h4>Login Page</h4>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          label="Email"
          autoFocus
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          label="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default validation;
