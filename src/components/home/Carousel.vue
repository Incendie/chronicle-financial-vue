<template>
  <div class="carousel-view">
    <transition-group class="carousel" tag="div">
      <div
        v-for="slide in slides"
        :class="[slide.name, 'carousel__slide']"
        :key="slide.id"
      >
      <div class="wrapper">
        <h1>{{ slide.title }}</h1>
      </div>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel__button button__left' @click="previous"></button>
      <button class='carousel__button button__right' @click="next"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  mounted() {
    this.carouselInterval = setInterval(function() {
      this.next();
    }.bind(this), this.carouselTiming)
  },
  data() {
    return {
      carouselInterval: "",
      carouselTiming: 5000000,
      slides: [
        {
          title: 'Free 30min Consultation',
          id: 4,
          name: "slide__consultation"
        },
        {
          title: 'Plan for the Future',
          id: 5,
          name: "slide__services"
        },
        {
          title: 'Live Life to the Fullest',
          id: 1,
          name: "slide__life",
        },
        {
          title: 'Did You Know?',
          id: 2,
          name: "slide__know",
        },
        {
          title: 'Meet Our Advisors',
          id: 3,
          name: "slide__advisors",
        },
      ]
    }
  },
   methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
      clearInterval(this.carouselInterval);
      this.carouselInterval = setInterval(function() {
        this.next();
      }.bind(this), this.carouselTiming)
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
      clearInterval(this.carouselInterval);
      this.carouselInterval = setInterval(function() {
        this.next();
      }.bind(this), this.carouselTiming)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../scss/styles.scss';
  @import './scss/_carousel.scss';
  @import './scss/_responsive.scss';

  .didYouKnow {
    background-color: $bgColour2;
  }

  .hero {
    background-image: url("../../assets/1920x650_know.jpg");
    background-position-y: -600px;
  }

  main {
    padding-bottom: 80px;
  }
</style>
