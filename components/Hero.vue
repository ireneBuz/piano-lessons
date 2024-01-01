<script setup>
import ContactForm from './ContactForm.vue'
import { ref } from 'vue';
import { gsap } from 'gsap'
let showModal = ref(false);

const openModal = () => {
    showModal.value = true;
}

const closeModal = () => {
    showModal.value = false;
}


const enter = (el) => {
    gsap.fromTo(el, {
        opacity: 0,
    }, { duration: 0.2, opacity: 1 });
}

const leave = (el, done) => {
    gsap.to(el, {
        duration: 0.2,
        opacity: 0,
        onComplete: done,
    });
}
</script>


<template>
    <header>
        <div class="hero">
            <div class="hero-text">
                <h1>The new way to take music lessons</h1>
                <p>Learn to play the piano and everything about music theory with classes tailored to you, your knowledge,
                    and your preferences.<span> Online or in-person,</span> choose the option that best suits you.</p>
                <div class="info">
                    <a role="button" aria-label="More info" @click="openModal">
                        More info</a>
                </div>
            </div>
            <transition @enter="enter" @leave="leave">
                <div v-if="showModal" @close="closeModal">
                    <ContactForm :closeModal="closeModal" />
                </div>
            </transition>
            <div class="hero-img">
                <img src="/images/heroimg.webp" alt="Singer logo" />
            </div>
        </div>
    </header>
</template>






<style scoped>
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.hero .hero-text {
    flex-direction: column;
    align-items: center;
}

.hero .hero-img img {
    margin-left: 40px;
    width: 90%;
}

.hero .hero-text h1 {
    font-family: 'Founders-Grotesk-medium';
    font-weight: 600;
    font-size: 49px;
    line-height: 120%;
}

.hero .hero-text p {
    font-size: 25px;
    font-family: 'Founders-Grotesk-medium';
    font-weight: 500;
    line-height: 120%;
}

.hero .hero-text span {
    color: #B795FF;
}

.hero .hero-text .info a {
    text-decoration: none;
    color: #FFFFFF;
    padding: 13px 19px 8px 19px;
    border-radius: 30px;
    font-family: 'Founders-Grotesk-medium';
    background: var(--main-colors-gradient, linear-gradient(30deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    font-size: 20px;
    cursor: pointer;

}

.hero .hero-text .info a:hover {
    background: var(--main-colors-gradient, linear-gradient(30deg, #1f53c3 13.4%, #cd59ff 75.6%));
}

.hero .hero-text .info {
    margin-top: 55px;
    margin-bottom: 50px;
    margin-left: 10px;

}

.hero .hero-text,
.hero .hero-img {
    width: 43%;
}

@media (max-width: 870px) {
    .hero {
        align-items: center;
        flex-direction: column-reverse;
        text-align: center;
    }

    .hero .hero-text h1 {
        margin-top: 0;
    }

    .hero .hero-text,
    .hero .hero-img {
        width: 90%;
    }

    .hero .hero-text {
        text-align: start;
    }

    .hero .info a {
        margin-left: 0px;
        padding: 10px 20px;
        font-size: 18px;
    }

    .hero .hero-img {
        text-align: center;
        margin-left: 0;
    }

    .hero .hero-img {
        width: 60%;

    }

    .hero .hero-text p {
        font-size: 24px;

    }
}

@media (max-width: 440px) {

    .hero .hero-text h1 {
        font-size: 34px;
        line-height: 34px;

    }

    .hero .hero-text,
    .hero .hero-img {
        width: 85%;
    }

    .hero .hero-text .info {

        padding-top: 5px;
        margin-top: 15px;
        margin-left: 0;
    }

    .hero .hero-text .info a {
        font-family: 'Founders-Grotesk-regular';
        font-size: 16px;
        display: block;
        width: 100%;
        margin: 0;
        padding: 10px 0 5px 0;
        text-align: center;
    }
}
</style>
