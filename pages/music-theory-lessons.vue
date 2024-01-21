<script setup>
import { gsap } from 'gsap'
import { openModal, closeModal, showModal } from '~/utils/modal'
import { musicTheoryMetaData } from './../utils/metaData.js'

const { isDarkMode } = defineProps(['isDarkMode']);

useHead(musicTheoryMetaData)


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
  <section id="teoria-musical" :class="{ 'dark-mode': isDarkMode }">
    <transition @enter="enter" @leave="leave">
      <div v-if="showModal" @close="closeModal">
        <ContactForm :closeModal="closeModal" />
      </div>
    </transition>
    <div class="musical-classes">
      <div class="musical-classes-info">
        <h2>
          Discover the fascinating world of music theory !
        </h2>

        <p>Have you always dreamed of understanding music at a deeper level? Would you like to read sheet music, compose
          your own songs, or understand how the great masters of music created their masterpieces? Then you're in the
          right place.
        </p>
        <p>I offer music theory classes designed for beginners and those who want to take their musical knowledge to the
          next level. My goal is to make music theory accessible and exciting for everyone, regardless of your level of
          experience.</p>


        <h3>In-person - 25€/h</h3>
        <h3>Online - 20€/h</h3>
        <div class="musical-classes-info-button">

          <div class="musical-classes-info-button-presential">
            <a role="button" aria-label="I want to know more" @click="openModal">
              I want to know more</a>
          </div>
        </div>
      </div>

      <div class="musical-classes-img">
        <img src="/images/musicalTheoryImg.webp" alt="">
      </div>
    </div>
  </section>
</template>


<style scoped>
.musical-classes {
  display: flex;
  margin-top: 100px;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 200px;
}

.musical-classes-info {
  color: #000;
  width: 50%;
}

.musical-classes-img {
  margin-left: 5px;
}

.musical-classes-img img {
  width: 100%;
}

.musical-classes-info h2 {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.48px;
}

.musical-classes-info h3 {
  font-family: 'Founders-Grotesk-medium';
  color: #715AFF;
  font-size: 22px;
}

.musical-classes-info p {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.2px;
}

.musical-classes-info .musical-classes-info-button {
  display: flex;
  gap: 12px;
}

.musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a {
  font-family: 'Founders-Grotesk-medium';
  padding: 10px 12.344px 6px 12.344px;
  border-radius: 18.517px;
  border: 1.003px solid #F85786;
  background: linear-gradient(60deg, #F85786 13.4%, #F85786 86.6%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  color: #FFF;
  font-size: 18.042px;
  cursor: pointer;
}

.musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a:hover {
  padding: 11px 13.344px 7px 13.344px;
  border: none;
  border-radius: 18.517px;
  color: #FFF;
  -webkit-text-fill-color: white;
  background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
}

.dark-mode h2,
.dark-mode p {
  color: #e6e6e6;
}



@media (max-width: 870px) {
  .musical-classes {
    flex-direction: column-reverse;
    margin-top: 0px;
    margin-bottom: 60px;
    align-items: center;
  }

  .musical-classes-img {
    width: 60%;
    margin-left: 0;
  }

  .musical-classes-img img {
    width: 100%;
    margin-bottom: 50px;
  }

  .musical-classes-info {
    font-family: 'Founders-Grotesk-medium';
    color: #000;
    width: 100%;
  }

}



@media (max-width: 440px) {

  .musical-classes {
    margin-top: 20px;
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 40px;
    align-items: center;
  }

  .musical-classes-info h2 {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.32px;
  }

  .musical-classes-info p {
    font-size: 18px;
    letter-spacing: -0.18px;
  }

  .musical-classes-img {
    width: 80%;
  }

  .musical-classes-img img {
    margin-bottom: 40px;
  }

  .musical-classes-info .musical-classes-info-button {
    display: block;
    text-align: center;

  }

  .musical-classes-info-button {
    padding-top: 0px;
  }


  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a {
    padding-left: 85px;
    padding-right: 85px;
  }

  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a:hover {
    padding-left: 85px;
    padding-right: 85px;
  }
}

@media (max-width: 400px) {
  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a {
    padding-left: 70px;
    padding-right: 70px;
  }

  .musical-classes-info .musical-classes-info-button .musical-classes-info-button-presential a:hover {
    padding-left: 70px;
    padding-right: 70px;
  }
}
</style>