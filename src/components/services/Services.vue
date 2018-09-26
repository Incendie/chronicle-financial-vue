<template>
  <div class="services">
    <div class="hero"></div>
    <main class="wrapper">
      <h2>About Us & Our Services</h2>
      <p>Specializing in the English speaking and Chinese speaking Canadian market, our team of experienced and knowledgeable representatives are here to listen to you and provide professional consultation regardless of your financial status, tailoring to your individual needs.</p>

      <p>Every customer is unique and important to us. At Chronicle Financial, we put principles such as integrity, love, service, and honesty into our everyday lives. We look forward to building a rewarding partnership with you.</p>

      <p>As a brokerage, we are partnered with a multitude of insurance companies, investment companies*, banks and financial institutions.</p>

      <p>Our investment professionals have the expertise, dedication and experience to make insightful investment decisions, while being committed to the principle that in every action we take, we will be guided by the long-term best interests of our clients.</p>
    </main>

    <section class="details wrapper">
      <h3>At Chronicle Financial, we work closely to a team of professionals, including lawyers, accountants, wealth consultants and tax specialists, in each of the following areas:</h3>
      <ul>
        <li>Education Planning</li>
        <li>Tax Planning</li>
        <li>Retirement Planning</li>
        <li>Insurance and Risk Management</li>
        <li>Corporate Insured Retirement Plans</li>
        <li>Estate and Legacy Planning</li>
        <li>Wealth Management – including RRSP’s, TFSA, RRIF, LIF, Non-registered accounts, etc.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  created: function() {
		var activeLink = document.getElementsByClassName("navLink")[2];

    activeLink.parentElement.classList.add("active");
    activeLink.parentElement.classList.remove("inactive");
	},
	destroyed: function() {
		var activeLink = document.getElementsByClassName("navLink")[2];

    activeLink.parentElement.classList.remove("active");
    activeLink.parentElement.classList.add("inactive");
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../scss/styles.scss';
  @import './scss/styles.scss';
</style>
