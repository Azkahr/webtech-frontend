import { defineStore } from "pinia";
import { apiUrl } from "@/config/config";

export const useAuth = defineStore('authStore', () => {
    async function logout() {
        let token = localStorage.getItem('token');

        await fetch(apiUrl + '/auth/logout', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }).then(response => {
            if(!response.ok) throw new Error('Network response was not ok')

            return response.json()
        }).then(() => {
            localStorage.removeItem('token')
        })
    }
    
    function authenticated() {
        let token = localStorage.getItem('token');
        
        if(!token) return false

        let response = fetch(apiUrl + '/auth/me', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })

        return response
    }

    return { authenticated, logout }
})