<template>
  <!-- Sidebar -->
    <aside class="sidebar">
        <br>
        <ul class="menu">
            <li><RouterLink to="/admin">Dashboard</RouterLink></li>
        </ul>
    </aside>
</template>

<script>
export default {

}
</script>

<style scoped>

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