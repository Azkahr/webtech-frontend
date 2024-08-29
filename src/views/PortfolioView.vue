<template>
  <div class="container" style="margin-top: 50px;">
        <section class="galery">
            <h1>Portfolio</h1>
            <div class="categories">
                <p>Categories : </p>
                <div class="items">
                    <RouterLink v-for="category in this.categories" :key="category.id" to="#" class="category-item animate">{{ category.name }}</RouterLink>
                </div>
            </div>
            <div class="content" style="margin-top: 40px;">
                <div class="card animate" v-for="portfolio in this.portfolio" :key="portfolio.id">
                    <div class="card-body">
                        <img :src="portfolio.image" alt="" class="card-img">
                    </div>
                </div>  
            </div>
        </section>
    </div>
</template>

<script>
import { apiUrl } from '@/config/config';

export default {
    data() {
        return {
            portfolio : [],
            categories : []
        }
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
    this.getCategories()
  }
}
</script>

<style>

</style>