
<template>
  <div>
    <div class="banner" style="margin-top: 100px;">
        <img :src="this.banner.image" alt="" class="banner-img">
    </div>
    
    <div class="container">
        <!-- about section -->
        <section class="about">
            <h1>About</h1>
            <div class="content">
                <div class="description">
                    <p>Discover the latest in global tech innovation on our comprehensive platform. Stay informed with cutting-edge developments across the technology landscape. Enjoy free access to a curated selection of applications and immersive games, complete with competitive leaderboards. Challenge yourself, track your progress, and compete with users worldwide to showcase your skills and expertise.</p>
                </div>
                <div class="image">
                    <img src="../assets/img/logo.png" alt="" class="img-about">
                </div>
            </div>
        </section>

        <!-- galery section -->
        <section class="galery">
            <h1>Galery</h1>
            <div class="content">
                <div class="card animate">
                    <div class="card-body">
                        <img src="../assets/img/logo.png" alt="" class="card-img">
                    </div>
                </div>
                <div class="card animate">
                    <div class="card-body">
                        <img src="../assets/img/logo.png" alt="" class="card-img">
                    </div>
                </div>
                <div class="card animate">
                    <div class="card-body">
                        <img src="../assets/img/logo.png" alt="" class="card-img">
                    </div>
                </div>
                <div class="card animate">
                    <div class="card-body">
                        <img src="../assets/img/logo.png" alt="" class="card-img">
                    </div>
                </div>
            </div>
        </section>

        <!-- services -->
        <section class="services">
            <h1>Try our Services</h1>
            <div class="content">
                <div class="description">
                    <p>Discover our exciting range of services! We're thrilled to offer two unique experiences for our users</p>
                </div>
            </div>
            <RouterLink to="#" class="blog animate">
                <img src="../assets/img/logo.png" alt="" class="blog-img">
                <div class="blog-info">
                    <p>Hey! Do you know that we have interesting game? You have to give it a shot!</p>
                </div>
            </RouterLink>
            <RouterLink to="#" class="blog animate">
                <img src="../assets/img/logo.png" alt="" class="blog-img">
                <div class="blog-info">
                    <p>We also have a tools to design something called DSGN Illustration, try to scribble your idea there!</p>
                </div>
            </RouterLink>
        </section>

        <!-- portfolio -->
        <section class="galery">
            <h1>Portfolio</h1>
            <div class="content" style="margin-top: 40px;">
                <div class="card animate" v-for="portfolio in this.portfolio" :key="portfolio.id">
                    <div class="card-body">
                        <img :src="portfolio.image" alt="" class="card-img">
                    </div>
                </div>
            </div>
        </section>

        <!-- testimonial -->
        <section class="testimonial">
            <h1>Testimonial</h1>
            <RouterLink to="#" class="blog animate">
                <img src="../assets/img/logo.png" alt="" class="blog-img">
                <div class="blog-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla culpa exercitationem sed laudantium consequatur reiciendis corrupti accusamus tempore iste iure?</p>
                </div>
            </RouterLink>
        </section>

        <!-- blog -->
        <section class="news">
            <h1>Blog</h1>

            <div class="news-search">
                <form action="" method="get">
                    <div class="form-group">
                        <input type="text" class="input" placeholder="Search blog">
                        <button type="submit" class="btn" style="margin-left: 10px">Search</button>
                    </div>
                </form>
            </div>
            
            <div class="news-wrapper">
                <BlogComponentHome v-for="blog in this.blog" :key="blog.id" :blog="blog"/>
            </div>
        </section>
    </div>
  </div>

  <FooterView/>
</template>

<script>
import BlogComponentHome from '@/components/BlogComponentHome.vue';
import FooterView from '../components/FooterComponent.vue'
import { apiUrl } from '@/config/config';

export default {
  data() {
    return {
      portfolio : [],
      banner : [],
      blog : []
    }
  },
  components : {
    FooterView,
    BlogComponentHome
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

    getBanner() {
      fetch(apiUrl + '/banner', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        method: "GET",
      }).then(response => {
        if(!response.ok) throw new Error('Network response was not ok')

        return response.json()
      }).then(data => {
        this.banner = data.data[0]
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
    }
  },
  mounted() {
    this.getPortfolioData()
    this.getBanner()
    this.getBlog()
  }
}
</script>