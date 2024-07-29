<script setup>
import blogsService from './../api/BlogsService'

const { isDarkMode } = defineProps(['isDarkMode'])
const route = useRoute()
const slides = ref([])
const metaData = ref({
  title: '',
  meta: []
})

blogsService.getAllBlogsArticles(route.params.readMoreLink)
  .then(({ data }) => {
    slides.value = data
    metaData.value = {
      title: data.metaDataTitleEng,
      meta: [
        { name: 'description', content: data.metaDataDescriptionEng },
        { name: 'keywords', content: data.metaDataKeywordsEng }
      ]
    }
  })
  .catch(err => console.log('ERROR AL TRAER EL BLOG', err))

watchEffect(() => {
  if (metaData.value.title) {
    useHead(metaData.value)
  }
})
</script>

<template>
  <section v-if="slides.articleEng" :id=route.readMoreLink :class="[{ 'dark-mode': isDarkMode }, 'blog-info']">
    <div class="blog-header">
      <div class="image-header">
        <img :src=slides.imageSrc alt="">
      </div>
      <div class="title-header">
        <h2>{{ slides.titleBlogEng }}</h2>
        <p>{{ slides.excerptArticleEng }}</p>
        <div class="info">
          <RouterLink role="button" aria-label="Más info" to="/piano-lessons">
            More info</RouterLink>
        </div>
      </div>
    </div>
    <div class="blog-text">
      <div class="blog-paragraph" v-html="slides.articleEng">
      </div>
    </div>
    <div class="info-end">
      <RouterLink role="button" aria-label="Más info" to="/piano-lessons">
        I want to know more!</RouterLink>
    </div>
  </section>
</template>
