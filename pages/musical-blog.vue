<script setup>
import { ref } from 'vue';
import { musicalBlogMetaData } from './../utils/metaData.js'
import blogsService from './../api/BlogsService'

const { isDarkMode } = defineProps(['isDarkMode']);

useHead(musicalBlogMetaData)

const slides = ref([]);

blogsService.getAllBlogsCards()
    .then(({ data }) => {
        return slides.value = data;
    })
    .catch(err => console.log('ERROR AL TRAER EL BLOG'))
</script>


<template>
    <header>
        <div class="home-blog" :class="{ 'dark-mode': isDarkMode }">
            <div class="title">
                <h2>MUSICAL BLOG</h2>
            </div>
            <div class="sub-title">
                <p>"Music is a higher revelation than any philosophy." - Beethoven</p>
            </div>

            <div class="cards">
                <div v-for="(slide, index) in slides" :key="index">
                    <BlogCards :image-src="slide.imageSrc" :title="slide.titleCardEng" :excerpt="slide.excerptEng"
                        :read-more-link="'/blog/' + slide.readMoreLinkEng" :date="slide.dateEng">
                    </BlogCards>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.home-blog {
    display: flex;
    padding-bottom: 50px;
    background-color: #FFE7FF;
    flex-direction: column;
    align-items: center;
}

.dark-mode .home-blog {
    background-color: #4f014f;
}

.title {
    padding-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
}



.title h2 {
    color: rgb(23, 23, 23);
    font-family: 'Newake';
    font-weight: 600;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 20px;
}

.dark-mode .title h2 {
    color: #e6e6e6
}

.sub-title {
    text-align: center;
}

.dark-mode .sub-title p {
    color: #bebebe;
}

.sub-title p {
    color: rgb(69, 69, 69);
    font-family: 'Founders-Grotesk-light';
    font-size: 26px;
    margin-top: 0;
    padding-top: 0;
}

.cards {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

@media (max-width: 970px) {
    .cards {
        width: 90vw;
    }

    .sub-title {
        margin-left: 10px;
        margin-right: 10px;
    }
}



@media (max-width: 428px) {

    .cards {
        width: 100vw;
    }

    .title {
        text-align: center;
        padding-top: 50px;
        margin-left: 5px;
        margin-right: 5px;

    }

    .sub-title {
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
    }

    .sub-title p {
        font-size: 22px;
    }
}
</style>
