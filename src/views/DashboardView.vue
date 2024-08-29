<template>
    <!-- Main Container -->
    <div class="dashboard-container">
        <SidebarComponent/>
        <!-- Main Content -->
        <main class="main-content">
            <h2>Welcome to the Dashboard</h2>
            <div class="category-section">
                <h3>Category</h3>
                <table class="table" style="margin-top: 10px">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="category in categories" :key="category.id">
                            <td>{{ category.id }}</td>
                            <td>{{ category.name }}</td>
                            <td>
                                <RouterLink to="#" class="logout-btn">Edit</RouterLink>
                                <RouterLink to="#" class="logout-btn" style="margin-left: 5px; margin-right: 5px;">Delete</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="blog-section" style="margin-top: 20px">
                <h3>Blog</h3>
                <br>
                <RouterLink :to="{ name : 'createBlog' }" class="logout-btn">Add Blog</RouterLink>
                <br>
                <table class="table" style="margin-top: 10px">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blog" :key="blog.id">
                            <td>{{ blog.id }}</td>
                            <td>{{ blog.title }}</td>
                            <td>
                                <RouterLink to="#" class="logout-btn">Edit</RouterLink>
                                <RouterLink :to="{ name : 'blogDetail', params : { id: blog.id } }" class="logout-btn" style="margin-left: 5px; margin-right: 5px;">Detail</RouterLink>
                                <RouterLink to="#" @click.prevent="deleteData(blog.id, 'blog')" class="logout-btn">Delete</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="portfolio-section" style="margin-top: 20px">
                <h3>Portfolio</h3>
                <table class="table" style="margin-top: 10px">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="portfolio in portfolio" :key="portfolio.id">
                            <td>{{ portfolio.id }}</td>
                            <td>{{ portfolio.title }}</td>
                            <td>
                                <img :src="portfolio.image" :alt="portfolio.title" width="80">
                            </td>
                            <td>
                                <RouterLink to="#" class="logout-btn">Edit</RouterLink>
                                <RouterLink to="#" @click.prevent="deleteData(portfolio.id, 'portfolio')" class="logout-btn" style="margin-left: 5px; margin-right: 5px;">Delete</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import { apiUrl } from '@/config/config';

export default {
  data() {
    return {
      portfolio : [],
      blog : [],
      categories : []
    }
  },
  components: {
    SidebarComponent
  },
  methods: {
    getPortfolioData() {
      fetch(apiUrl + '/portfolio', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        method: "GET",
      }).then(response => {
        if(!response.ok) throw new Error('Network response was not ok')

        return response.json()
      }).then(data => {
        this.portfolio = data.data
      });
    },
    
    deleteData(id, url) {
        fetch(apiUrl + '/'+ url +'/' + id, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization" : 'Bearer ' + localStorage.getItem('token')
            },
            method: "DELETE",
        }).then(response => {
            if(!response.ok) throw new Error('Network response was not ok')

            return response.json()
        }).then(() => {
            location.reload()
        });
    },

    getBlog() {
      fetch(apiUrl + '/blog', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        method: "GET",
      }).then(response => {
        if(!response.ok) throw new Error('Network response was not ok')

        return response.json()
      }).then(data => {
        this.blog = data.data
      });
    },

    getCategories() {
        fetch(apiUrl + '/category', {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
            method: "GET",
        }).then(response => {
            if(!response.ok) throw new Error('Network response was not ok')

            return response.json()
        }).then(data => {
            this.categories = data.data
        });
    }
  },
  mounted() {
    this.getPortfolioData()
    this.getBlog()
    this.getCategories()
  }
}
</script>

<style scoped>
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