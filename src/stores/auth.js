import { defineStore } from "pinia";
import { ref } from 'vue';
import { apiUrl } from "@/config/config";

export const useAuth = defineStore('auth', () => {
    const isAuthenticated = ref(false);
    const user = ref(null);

    async function login(credentials) {
        try {
            const response = await fetch(apiUrl + '/auth/login', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) throw new Error('Login failed');

            const data = await response.json();
            localStorage.setItem('token', data.token);
            isAuthenticated.value = true;
            await fetchUser();
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async function logout() {
        try {
            const token = localStorage.getItem('token');
            await fetch(apiUrl + '/auth/logout', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('token');
            isAuthenticated.value = false;
            user.value = null;
        }
    }
    
    async function fetchUser() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                isAuthenticated.value = false;
                user.value = null;
                return;
            }

            const response = await fetch(apiUrl + '/auth/me', {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            });

            if (!response.ok) throw new Error('Failed to fetch user');

            user.value = await response.json();
            isAuthenticated.value = true;
        } catch (error) {
            console.error('Fetch user error:', error);
            isAuthenticated.value = false;
            user.value = null;
        }
    }

    return { 
        isAuthenticated, 
        user, 
        login, 
        logout, 
        fetchUser 
    };
});