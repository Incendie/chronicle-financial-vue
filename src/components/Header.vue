<template>
  <header>
		<div class="logo">
				<!-- <a href="./"><img src="./public/images/chronicle-financial-300dpi.png" alt=""></a> -->
		</div>
		<nav>
			<input id="hamburger" type="checkbox">
			<label for="hamburger" class="hamburger">
					<span class="hamburger__label">Menu</span>
					<span class="hamburger__top"></span>
					<span class="hamburger__middle"></span>
					<span class="hamburger__bottom"></span>
			</label>
			<div class="header__nav">
				<ul>					
					<li><a href="about.html">About Us</a></li>
					<li><a href="advisors.html">Advisors</a></li>
					<li><a href="services.html">Our Services</a></li>
					<li><a href="contact.html">Contact Us</a></li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
