import React, { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';

const MyLoginPage = ({ theme }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();
  const submit = (e) => {
    e.preventDefault();
    login({ username, password })
      .catch(() => notify('Invalid username or password'));
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={submit}>
        <input name="username" type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
    </ThemeProvider>
  );
};

export default MyLoginPage;
