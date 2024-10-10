import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { register } from '../services/authService';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            await register(name, email, password).then(response => {
                setIsLoading(false);
                setSuccess(response.message); // Assuming the API gives a success message
                // After successful registration, navigate to login or home page
                navigate('/login');
            });
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleRegister} className="space-y-4 space-x-3">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
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
                {success && <p className="text-green-500">{success}</p>}
                <Button type="submit" isLoading={isLoading} className="bg-green-500 text-white px-4 py-2 rounded">Register</Button>
            </form>
        </div>
    );
};

export default Register;