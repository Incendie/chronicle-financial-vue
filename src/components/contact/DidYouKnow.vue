<template>
  <div class="didYouKnow">
    <div class="hero"></div>
    <main class="wrapper">
      <h2>Did You Know?</h2>
      <p>Did you know in order to retire comfortably, you need at least 70% of your working income! People are living longer and longer…the expected life expectancy of people born in year 2000 could exceed 90 years old! Do you have the financial tools and a plan to achieve a comfortable retirement?</p>      
      </main>
  </div>
</template>

<script>
export default {
  name: 'DidYouKnow',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../scss/styles.scss';
  @import './scss/styles.scss';

  .didYouKnow {
    background-color: $bgColour2;
  }

  .hero {
    background-image: url("../../assets/wedding-1770860.jpg");
  }

  main {
    padding-bottom: 80px;
  }

  @import './scss/_responsive.scss';

  @media only screen and (max-device-width : 1024px) {
    .hero {
      background-position: 0 80px;
    }
  }
</style>
