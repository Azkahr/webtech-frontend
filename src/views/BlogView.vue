<template>
      <div class="container" style="margin-top: 50px;">
        <!-- popular blog -->
        <section class="testimonial">
            <h1 align="center">Popular Blog</h1>
            <RouterLink v-for="blog in this.blog" :key="blog.id" :to="{ name : 'blogDetail', params : { id: blog.id } }" class="blog animate">
                <img :src="blog.image" alt="" class="blog-img">
                <div class="blog-info">
                    <p>{{ blog.description }}</p>
                </div>
            </RouterLink>
        </section>
        <!-- blog -->
        <section class="testimonial" style="margin-top: 40px;">
            <h1 align="center">Blog</h1>
            <div class="categories">
                <p>Categories : </p>
                <div class="items">
                    <RouterLink v-for="category in this.categories" :key="category.id" to="#" class="category-item animate">{{ category.name }}</RouterLink>
                </div>
            </div>
            <RouterLink v-for="blog in this.blog" :key="blog.id" :to="{ name : 'blogDetail', params : { id: blog.id } }" class="blog animate">
                <img :src="blog.image" alt="" class="blog-img">
                <div class="blog-info">
                    <p>{{ blog.description }}</p>
                </div>
            </RouterLink>
        </section>
    </div>

    <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import { apiUrl } from '@/config/config';

export default {
  data() {
    return {
      blog : [],
      categories : []
    }
  },
  components : {
    FooterComponent,
  },
  methods: {
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
    this.getBlog()
    this.getCategories()
  }
}
</script>

<style>

</style>