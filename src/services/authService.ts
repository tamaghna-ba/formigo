import axios from 'axios';
import { API_END_POINT_URL } from '../constants/appConstant';
interface LoginResponse {
    accessToken: string;
}

interface RegisterResponse {
    // Define other fields you expect in the registration response if any
    message: string;
}

// Function to handle user login
export const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(API_END_POINT_URL + '/user/login', {
        username,
        password,
    });

    if (response.data.accessToken) {
        // Store token in localStorage
        localStorage.setItem('authToken', response.data.accessToken);
    }

    return response.data;
};

// Function to handle user registration (this is a fake API; you'll have to replace with real one)
export const register = async (name: string, email: string, password: string): Promise<RegisterResponse> => {
    const response = await axios.post<RegisterResponse>(API_END_POINT_URL + '/user/register', {
        name,
        email,
        password,
    });

    return response.data;
};

// Function to log out the user
export const logout = () => {
    localStorage.removeItem('authToken');
};