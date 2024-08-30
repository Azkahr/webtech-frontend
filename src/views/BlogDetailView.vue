<template>
  <div class="container" style="margin-top: 50px;">
        <section class="blog-content">
            <div class="title">
                <h1>{{ this.blog.title }}</h1>
            </div>
            <div class="banner">
                <img :src="this.blog.image" alt="" class="banner-img">
            </div>
            <div class="blog-stat">
                <div class="author">
                    <p>{{ this.author.name }} | </p>
                    <p>{{ this.blog.created_at }}</p>
                </div>
                <div class="views">
                    <a href="#">
                        Comments :
                        <span>{{ this.totalComment }}</span>
                    </a>
                    <a href="#">
                        Views :
                        <span>100</span>
                    </a>
                </div>
            </div>

            <div class="blog-desc">
                <p>{{ this.blog.description }}</p>
            </div>

            <div class="comment">
                <h1>Comment</h1>
                <div class="comment-input">
                    <form @submit.prevent="this.postComment()">
                        <div class="form-group">
                            <input type="text" class="input" placeholder="Website" v-model="this.form.website">
                        </div>
                        <div class="form-group">
                            <textarea name="comment" id="comment" class="input" cols="500" v-model="this.form.subject" placeholder="Add Comment"></textarea>
                            <button type="submit" class="btn">Comment</button>
                        </div>
                    </form>
                </div>

                <div class="list-comments">
                    <div class="list-comment-item" v-for="comment in this.comments" :key="comment.id">
                        <div class="info-comment">
                            <div class="profile">
                                <img :src="comment.user.profile_picture" :alt="comment.user.name">
                                <p>{{ comment.user.name }}</p>
                            </div>
                            <div class="date">
                                {{ comment.created_at }}
                            </div>
                        </div>
                        <div class="user-comment">
                            <p>{{ comment.subject }}</p>
                        </div>
                        <br>
                        <hr>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import '../assets/blog.css'
import { apiUrl } from '@/config/config';

export default {
    data() {
        return {
            blog: [],
            author: [],
            comments: [],
            totalComment: '',
            form : {
                website : '',
                subject : '',
                blog_id : this.$route.params.id
            }
        }
    },
    methods: {
        async getDetailBlog() {
            fetch(apiUrl + '/blog/' + this.$route.params.id, {
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
                this.author = data.data.author
                this.totalComment = data.data.comments.length
                this.comments = data.data.comments
            });
        },

        async postComment() {
            await fetch(apiUrl + '/blog-comment', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(this.form),
            }).then(response => {
                if(!response.ok) throw new Error('Network response was not ok')

                return response.json()
            }).then((data) => {
                this.comments.push(data.data)

                this.form.website = ''
                this.form.subject = ''
                
                this.getDetailBlog()
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    async mounted() {
        await this.getDetailBlog()
    }
}
</script>

<style>
.views a {
    color: rgb(63, 63, 63);
}

.author p {
    font-weight: 600;
}

.form-group {
    margin-bottom: 10px;
}
</style>