<template>
  <footer class="wrapper">
		<p>Copyright © ACTS Financial Corp.</p>
		<p>*Mutual Funds are sold through TeamMax Investment Corp. The information and data contained herein have been obtained from sources believed to be reliable. We do not represent, warrant or guarantee that they are accurate or complete or that they should be relied upon. Nothing contained herein shall be construed as an offer, invitation, advertisement or inducement for purchase or sale of any securities, products or services. We accept no liability for any loss or damage howsoever arising by reliance on any information given or opinion expressed on this Web site. Financial markets inherently have a certain extent of risk and the investment value may go down as well as up.</p>
	</footer>
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
