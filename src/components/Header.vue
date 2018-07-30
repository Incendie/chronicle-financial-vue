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
					<li
						v-for="page in pages"
						v-bind:key="page"
						v-on:click="currentpage = page"
					>
						<a v-bind:href="'/' + page.href">{{ page.name }}</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
  name: 'Header',
  props: ['tabs'],
	data: function() {
		return {
			pages:
				this.tabs
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
