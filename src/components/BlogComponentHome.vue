<template>
    <RouterLink :to="{ name : 'blogDetail', params : { id: blog.id } }" class="card-news animate">
        <div class="card-head">
            <img :src="blog.image" :alt="blog.title">
        </div>
        <div style="margin-top: 20px">
            <h1>{{ blog.title }}</h1>
            <p style="margin-top: 10px;">{{ blog.description }}</p>
        </div>
    </RouterLink>
</template>

<script>
export default {
    props : {
        blog : {
            type: Object,
            required: true
        }
    }
}
</script>