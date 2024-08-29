<template>
    <div class="container">
        <div class="login">
            <h1>Login</h1>

            <form @submit.prevent="handleLogin()">
                <div class="form-group">
                    <input type="text" class="input" v-model="this.form.email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="password" class="input" v-model="this.form.password" placeholder="Enter password">
                </div>
                <button type="submit" class="btn">Login</button>
                <p v-if="this.errorMessage != ''" class="error-message">{{ this.errorMessage }}</p>
            </form>
        </div>
    </div>
</template>

<script>
import { apiUrl } from "@/config/config";
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            form : {
                email : '',
                password : '',
            },
            errorMessage: '' 
        }
    },
    setup() {
        const router = useRouter()

        return { router }
    },
    methods: {
        async handleLogin() {
            await fetch(apiUrl + '/auth/login', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.form),
            }).then(response => {
                if(!response.ok) throw new Error('Network response was not ok')

                return response.json()
            }).then((data) => {
                localStorage.setItem('token', data.data.access_token);
                
                let route = data.data.role == 'admin' ? 'admin' : 'home'
                
                this.router.push({ name : route })
            }).catch(() => {
                this.errorMessage = 'Login failed, please check your credentials'
            });
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center
}

.login {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
    margin-top: 100px;
    box-shadow: 0 0 10px black;
    background-color: white;
    border-radius: 10px;
}

.form-group {
    margin-top: 20px;
}

.form-group input {
    width: 100%;
}

.btn {
    width: 100px;
}

@media (max-width: 800px) {
    .container {
        margin-top: 100px;
    }
}
</style>