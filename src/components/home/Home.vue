<template>
  <div>
    <main class="wrapper">
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit explicabo minus aperiam consequatur non vero pariatur cumque culpa facere ea illo quam architecto recusandae, et voluptatum eum porro eligendi quae odit neque inventore voluptatem veritatis. Voluptate officiis, ea, eaque harum, similique commodi impedit rerum hic eius cupiditate nemo! Mollitia, quidem.</p>
    </main>

    <div class="links wrapper">
      <div class="links__consultation">
        <p class="links__overlay">Consultation</p>
        <img src="../../assets/Cherry-prof2.jpg" alt="">
      </div>
      <div class="links__advisors">
          <p class="links__overlay">Advisors</p>
        <img src="../../assets/D88_8728.jpg" alt="">
      </div>
    </div>

    <div class="contact wrapper">
      <p>Your questions and inquiries are important to us!</p>
      <p><a href="#">Click Here</a> to Contact Us</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../scss/styles.scss';  
</style>
