<template>
	<div class="advisors">
		<div class="hero"></div>
		<main>
			<div class="advisor">
				<div class="wrapper">
					<div class="advisor__photo cherry"></div>
					<div class="advisor__info">
						<h2>Our Director</h2>
						<h3>Cherry Cheung</h3>
						<p>Cherry Cheung is a multi-faceted Certified Financial Planning (CFP) Professional, who holds an array of professional licenses – including insurance and investments*. Cherry is a Million Dollar Round Table (MDRT) qualifier in 2014, 2015, 2018, and a Court of the Table MDRT qualifier in 2016 and 2017. This young achiever is associated with the top 1% of the world’s life insurance and financial services professionals.</p>

						<p>Graduating with an Honours Bachelor of Business Administration (B.B.A.) degree at the University of Toronto, her strong business education laid a strong foundation of knowledge for prudent decision making. Cherry also qualified for the 2016 and 2018 National Education Conference with Manulife Financial, and Canada Life’s Platinum Conference in 2014 and 2016 – prestigious conferences in which only 200 top advisors across Canada were invited to.</p>

						<p>In order to provide a holistic approach to financial planning, Cherry works closely to a team of professionals, including lawyers, accountants, real estate professionals, wealth consultants and tax specialists.</p>

						<div class="foci">
							<p>As a Certified Financial Planning (CFP) Professional, Cherry focuses on several areas:</p>
							<ul>
								<li>Financial Management</li>
								<li>Insurance and Risk Management</li>
								<li>Management</li>
								<li>Investment Planning</li>
								<li>Retirement Planning</li>
								<li>Tax Planning</li>
								<li>Estate Planning & Legal Aspects</li>
							</ul>
						</div>
						<p>With a passion for serving people, she truly understands and treats each client like one of her family, demonstrating professional knowledge, strict ethical conduct, and exceptional service. She will certainly help you reach a brighter financial future.</p>

						<p>Cherry can be contacted at 905-597-7780 or at <a href="mailto:Cherry.Cheung@Chronicle-Financial.com">Cherry.Cheung@Chronicle-Financial.com</a></p>
					</div>
				</div>
			</div>
			<div class="advisor">
				<div class="wrapper">
					<div class="advisor__photo apple"></div>
					<div class="advisor__info">
						<h2>Our Top Advisor</h2>
						<h3>Apple Ho</h3>
						<p>Apple Ho has over 28 years of experience in the insurance and investment industry. She is a member of the Million Dollar Round Table (MDRT), the Premiere Associations of Financial Professionals, an honourable accreditation that less than 1% of the world`s life insurance and financial services professionals achieve.</p>

						<p>With a passion for serving people, she truly understands and treats each client like one of her family, demonstrating professional knowledge, strict ethical conduct, and exceptional service. She will certainly help you reach a brighter financial future.</p>

						<div class="foci">
							<p>In order to provide complete, well rounded service in financial planning, Apple works closely to a team of professionals, including lawyers, accountants, wealth consultants and tax specialists, in each of the following areas:</p>
							<ul>
								<li>Wealth Management – including RRSP’s, TFSA, RRIF, LIF, Non-registered accounts, etc. </li>
								<li>Education Planning</li>
								<li>Tax Planning</li>
								<li>Retirement Planning</li>
								<li>Insurance and Risk Management</li>
								<li>Corporate Insured Retirement Plans</li>
								<li>Estate and Legacy Planning</li>
							</ul>
						</div>

						<p>Apple can be contacted at 905-597-7780 or at <a href="Apple.Ho@ActsFinancial.com">Apple.Ho@ActsFinancial.com</a></p>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>

export default {
	name: 'Advisors',
	created: function() {
		var activeLink = document.getElementsByClassName("navLink")[1];

		activeLink.parentElement.classList.add("active");
		activeLink.parentElement.classList.remove("inactive");
	},
	destroyed: function() {
		var activeLink = document.getElementsByClassName("navLink")[1];

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
