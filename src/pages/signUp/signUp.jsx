import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './signUp.module.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Conta criada com sucesso!');
    navigate('/signIn');
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" className={styles.signIpButton} onClick={() => {navigate('/signIn')}}>Já tenho conta</button>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignUp;
