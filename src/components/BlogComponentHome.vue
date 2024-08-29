<template>
  <div>
    <RouterLink :to="{ name : 'blogDetail', params : { id: blog.id } }" class="card-news animate">
        <div class="card-head">
            <img :src="blog.image" :alt="blog.title">
        </div>
        <div class="blog-info">
            <p>{{ blog.description }}</p>
        </div>
    </RouterLink>
  </div>
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

<style>

</style>