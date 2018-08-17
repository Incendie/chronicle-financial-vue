<template>
  <div class="consultation">
    <div class="hero"></div>
    <main class="wrapper">
      <h2>Free 30min Consultation</h2>
      <p>Come in and speak to our specialized advisors, gain valuable advice and insight that is tailored to your needs. We welcome questions and people from all walks of life. Contact us today!</p>      
    </main>
  </div>
</template>

<script>
export default {
  name: 'Consultation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../scss/styles.scss';
  @import './scss/styles.scss';

.hero {
    background-image: url("../../assets/team-meeting.jpg");
    background-position-y: -600px;
  }

  .consultation {
    background-color: $bgColour2;
  }

  main {
    padding-bottom: 80px;
  }

</style>
