<script setup>
import { lessonsScheduleMetaData } from './../utils/metaData.js'

const { isDarkMode } = defineProps(['isDarkMode'])

useHead(lessonsScheduleMetaData)
</script>

<template>
  <section id="horarios" :class="{ 'dark-mode': isDarkMode }">
    <div class="schedule-relative">
      <div class="schedule-info">
        <h2>
          My private lessons with flexible schedules
        </h2>
        <h2>
          are tailored to accommodate your needs.
        </h2>
        <p>From <span>Monday to Friday,</span> you can choose between the mornings, from <strong>9AM to
            2PM,</strong>
          to start your study day with energy, or the afternoons, from <strong>3PM to 9PM,</strong> to review and
          consolidate what you have learned after your daily commitments. Your success is my priority, and my schedule is
          flexible to facilitate your path to knowledge and growth.</p>
      </div>
      <div class="schedule-info-background">
        <div class="schedule-info-background-img1">
          <img src="/images/scheduleBackground1.svg" alt="">
        </div>
        <div class="schedule-info-background-img2">
          <img src="/images/scheduleBackground2.svg" alt="">
        </div>

      </div>
    </div>
  </section>
</template>


<style scoped>
.schedule-relative {
  display: flex;
  flex-direction: column;
  min-height: 96vh;
}

.schedule-info {
  font-family: 'Founders-Grotesk-medium';
  color: #000;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: auto;
}

.schedule-info h2 {
  margin: 0;
  align-self: stretch;
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
}

.schedule-info p {
  font-family: 'Founders-Grotesk-medium';
  margin: 0;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.2px;
}

.schedule-info p span {
  color: #715AFF;
}

.schedule-info p strong {
  color: #F85786;
}

.schedule-info-background {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: auto;

}

.schedule-info-background .schedule-info-background-img1 {
  transform: translateY(255px);
  margin-top: -30px;
}

.dark-mode h2,
.dark-mode p {
  color: #e6e6e6;
}

@media (max-width: 870px) {

  .schedule-info {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 130px;
  }


  .schedule-info-background .schedule-info-background-img1 {
    margin-top: 30px;
  }
}

@media (max-width: 440px) {
  .schedule-info {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
  }

  .schedule-info h2 {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.32px;
  }

  .schedule-info p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.18px;
  }

  .schedule-info-background .schedule-info-background-img1,
  .schedule-info-background .schedule-info-background-img2 {
    text-align: end;
  }

  .schedule-info-background .schedule-info-background-img1 img,
  .schedule-info-background .schedule-info-background-img2 img {
    z-index: 1;
    margin-top: 0px;
    width: 70%;
  }

  .schedule-info-background .schedule-info-background-img1 {
    transform: translateY(180px);
    z-index: 1;
    margin-top: -30px;
  }


}
</style>