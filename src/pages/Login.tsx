import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { login } from '../services/authService';

const Login: React.FC = () => {
    const [username, setEmail] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            await login(username, password).then(response => {
                setIsLoading(false);
                navigate('/');
            });
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="space-y-4 space-x-3">
                <input
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                />
                {error && <p className="text-red-500">{error}</p>}
                <Button isLoading={isLoading} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Button>
            </form>
        </div>
    );
};

export default Login;