import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function Login() {

    const [isLoginMode, setIsLoginMode] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoginMode) {
            console.log('Login:', { email, password });
        } else {
            console.log('Register:', { username, email, password });
        }
        navigate('/home');
    };

    const toggleMode = () => {
        setIsLoginMode((prevMode) => !prevMode);
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );

    const footer = (
        <>
            <Button className="submitForm" label="Invia" icon="pi pi-check" type="submit" form="loginForm" severity='success'/>
        </>
    );

    return (
        <div className="login">
            <Card title="Account" footer={footer} header={header} className="account">
                <div>
                    <h3>{isLoginMode ? 'Login' : 'Registrazione'}</h3>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        {!isLoginMode && (
                            <div>
                                <FloatLabel>
                                    <InputText type="password" value={username} onChange={(e) => setUsername(e.target.value)} required={!isLoginMode} />
                                    <label className="placeholder" htmlFor="username">Username</label>
                                </FloatLabel>
                            </div>
                        )}
                        <div>
                            <FloatLabel>
                                <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label className="placeholder" htmlFor="email">Email</label>
                            </FloatLabel>
                        </div>
                        <div>
                            <FloatLabel>
                                <InputText type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <label className="placeholder" htmlFor="password">Password</label>
                            </FloatLabel>
                        </div>
                    </form>
                    <Button className="changeButton" label={isLoginMode ? 'Vai alla registrazione' : 'Vai al Login'} onClick={toggleMode} />
                </div>
            </Card>
        </div>
    );
}