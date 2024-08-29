<template>
   <!-- Main Container -->
   <div class="dashboard-container">
        <SidebarComponent/>
        <!-- Main Content -->
        <main class="main-content">
            <h2>Create Blog</h2>
            
            <form @submit.prevent="">
                <div class="form-group">
                    <input type="text" class="input" placeholder="Enter Title">
                </div>
                <div class="form-group">
                    <textarea class="input" placeholder="Enter description"></textarea>
                </div>
                <div class="form-group">
                    <select name="" id="" class="input">
                        <option value="" selected disabled>Select category</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="file" name="" id="" class="input">
                </div>
                <button type="submit" class="logout-btn">Create</button>
            </form>
        </main>
    </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
  components: {
    SidebarComponent
  },
}
</script>

<style scoped>
.form-group {
    margin-bottom: 10px;
}

.input {
    padding: 10px
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 10px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: white;
    box-shadow: 0 0 10px black;
    flex-wrap: wrap;
}

.nav-brand {
    margin-left: 20px;
    width: 50px;
}

.navbar-right {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 20px;
}

.profile {
    display: flex;
    align-items: center;
    gap: 10px;
}

.profile-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.logout-btn {
    cursor: pointer;
    color: black;
    text-decoration: none;
    padding: 8px 15px;
    background-color: white;
    border-radius: 5px;
    transition: background-color 0.3s;
    border: 1px solid black;
}

.logout-btn:hover {
    background-color: black;
    color: white;
}

.dashboard-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    height: calc(100vh - 60px); /* Adjust based on navbar height */
}

.sidebar {
    width: 250px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar .menu {
    list-style: none;
}

.sidebar .menu li {
    margin-bottom: 20px;
}

.sidebar .menu a {
    text-decoration: none;
    color: gray;
    font-weight: bold;
    display: block;
    transition: color 0.3s;
}

.sidebar .menu a:hover {
    color: black;
}

.main-content {
    flex-grow: 1;
    padding: 20px;
    min-width: 300px; /* minimum width */
}

.main-content h2 {
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .navbar-right {
        margin-right: 0;
        justify-content: space-between;
        width: 100%;
    }

    .dashboard-container {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        box-shadow: none;
        padding: 10px;
    }

    .main-content {
        padding: 10px;
    }
}

@media (max-width: 480px) {
    .nav-brand {
        margin-left: 10px;
        width: 40px;
    }

    .profile-img {
        width: 30px;
        height: 30px;
    }

    .logout-btn {
        padding: 5px 10px;
    }

    .sidebar {
        padding: 5px;
    }

    .sidebar .menu li {
        margin-bottom: 10px;
    }
}

</style>