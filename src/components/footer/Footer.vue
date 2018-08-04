<template>
  <div>
    <section class="contact">
      <h2>Contact Us</h2>
      <ul class="contact__info">
        <li>
          <img src="" alt="">
          <p>905 597 7780</p>
        </li>
        <li>
          <img src="" alt="">
          <p>E-Mail</p>
        </li>
      </ul>
      <div class="contact__address">
        <p>20 Wertheim Crt. Unit #19</p>
        <p>Richmond Hill, On</p>
        <p>L4B 3H7</p>
      </div>
    </section>

    <footer class="wrapper">
      <p>Copyright © ACTS Financial Corp.</p>
      <p>*Mutual Funds are sold through TeamMax Investment Corp. The information and data contained herein have been obtained from sources believed to be reliable. We do not represent, warrant or guarantee that they are accurate or complete or that they should be relied upon. Nothing contained herein shall be construed as an offer, invitation, advertisement or inducement for purchase or sale of any securities, products or services. We accept no liability for any loss or damage howsoever arising by reliance on any information given or opinion expressed on this Web site. Financial markets inherently have a certain extent of risk and the investment value may go down as well as up.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/styles.scss';
  @import './scss/styles.scss';
</style>
