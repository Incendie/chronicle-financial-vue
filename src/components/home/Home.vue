<template>
  <div class="home">
    <div class="hero">
			<Carousel :links="links"/>
			<div class="wrapper">
		<!-- <h1>Live Life to the Fullest</h1> -->
			</div>
    </div>
    <main>
			<div class="wrapper">
				<h2>About Us & Our Services</h2>
				<p>Specializing in the English speaking and Chinese speaking Canadian market, our team of experienced and knowledgeable representatives are here to listen to you and provide professional consultation regardless of your financial status, tailoring to your individual needs.</p>

				<p>Every customer is unique and important to us. At Chronicle Financial, we put principles such as integrity, love, service, and honesty into our everyday lives. We look forward to building a rewarding partnership with you.</p>

				<p>As a brokerage, we are partnered with a multitude of insurance companies, investment companies*, banks and financial institutions.</p>

				<p>Our investment professionals have the expertise, dedication and experience to make insightful investment decisions, while being committed to the principle that in every action we take, we will be guided by the long-term best interests of our clients.</p>
			</div>
    </main>
  
    <section class="about">
			<div class="wrapper">
				<h2>Learn More About Us</h2>
				<ul class="links">
					<li>
						<div class="links__container">
							<router-link to="/advisors" tag="div" class="links__img advisors"></router-link>
							<h3>Meet Our Advisors</h3>
							<p>Meet our team of qualified, passionate advisors!</p>
							<router-link to="/advisors" tag="button">Read More</router-link>
						</div>
					</li>
					<li>
						<div class="links__container">
							<router-link to="/didyouknow" tag="div" class="links__img know"></router-link>
							<h3>Did You Know?</h3>
							<p>In order to retire comfortably, you need 70% of your working income! Are you prepared?</p>
							<router-link to="/didyouknow" tag="button">Read More</router-link>
						</div>
					</li>
					<li>
						<div class="links__container">
							<router-link to="/consultation" tag="div" class="links__img consult"></router-link>
							<h3>Free 30Min Consultation</h3>
							<p>We'd like to provide you with a second opinion. Come and speak to us!</p>
							<router-link to="/consultation" tag="button">Read More</router-link>
						</div>
					</li>
				</ul>
			</div>
		</section>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue"

export default {
	name: 'Home',
	props: {
		links: {
			required: true,
		}
	},
	mounted: function() {
		let activeLink = document.getElementsByClassName("router-link-active")[0];

		activeLink.parentElement.classList.add("active");
		activeLink.parentElement.classList.remove("inactive");
	},
	destroyed: function() {
		let activeLink = document.getElementsByClassName("router-link-active")[0];

		activeLink.parentElement.classList.remove("active");
		activeLink.parentElement.classList.add("inactive");
	},
	components: {
		Carousel,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../scss/styles.scss';
  @import './scss/styles.scss';
</style>
