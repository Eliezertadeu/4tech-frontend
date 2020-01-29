import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { user } from '../../services/user';
import { login } from '../../services/auth';

import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';

import './Login.css';

const Login = () => {

    const history = useHistory();

    const [isLogin, setIsLogin] = useState(true);
    const [userLogin, setUserLogin] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onLoginChange = (event) => {
        setUserLogin(event.target.value);
    };

    const onRegister = (event) => {
        event.preventDefault();
        const response = user.register(userLogin, userName, userPassword);

        console.log(response);

    }
    const onLogin = async (event) => {
        event.preventDefault();
        const response = await login(userLogin, userPassword);
        
        if (response.status >= 200 && response.status < 300) {
            history.push('/timeline');
        }
        
        console.log(response);
    }
    const renderLogin = () => {
        return (
            <Fragment>
                <TextField
                    id="userLogin"
                    label="Your login"
                    value={userLogin}
                    onChange={onLoginChange}
                    required
                >
                </TextField>

                <TextField
                    type="password"
                    id="userPassword"
                    label="Your password"
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                    required
                >
                </TextField>
                <Button type="submit" color="primary">Entrar</Button>
                <Button color="secondary" onClick={() => { setIsLogin(!isLogin) }}>Cadastre-se</Button>
            </Fragment>
        )
    }
    const renderRegister = () => {
        return (
            <Fragment>
                <TextField
                    id="userName"
                    label="Full name"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    required
                >
                </TextField>

                <TextField
                    id="userLogin"
                    label="Your login"
                    value={userLogin}
                    onChange={onLoginChange}
                    required
                >
                </TextField>

                <TextField
                    type="password"
                    id="userPassword"
                    label="Your password"
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                    required
                >
                </TextField>
                <Button type="submit" color="primary">Cadastrar</Button>
                <Button color="secondary" onClick={() => setIsLogin(true)}>Entrar</Button>
            </Fragment>
        )
    };
    return (
        <div className="login">
            <Grid item xs={2} className="grid">
                <Paper className="paper">
                    <form onSubmit={!isLogin ? onRegister : onLogin}>
                        <Typography variant="h6">4Tech Insta</Typography>
                        {isLogin ? renderLogin() : renderRegister()}
                    </form>
                </Paper>
            </Grid>
        </div>
    )
};

export default Login;
