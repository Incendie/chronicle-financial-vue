<template>
  <header>
		<div class="wrapper navbar">
			<div class="logo">
					<a href="./"><img src="../../assets/chronicle-financial-300dpi.png" alt=""></a>
			</div>
			<nav>
				<input id="hamburger" type="checkbox">
				<label for="hamburger" class="hamburger">
						<span class="hamburger__label">Menu</span>
						<span class="hamburger__top"></span>
						<span class="hamburger__middle"></span>
						<span class="hamburger__bottom"></span>
				</label>
				<ul>
						<li v-for="routes in links" v-bind:key="routes.id" class="inactive" @click="navigate">
							<router-link
								:class="`navLink ${routes.name}`"
								:to="`${routes.page}`"
							>{{ routes.text }}
							</router-link>
						</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	methods: {
		navigate() {
			document.getElementById("hamburger").checked = false;
		}
	},
	props: {
		links: {
			required: true,
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../scss/styles.scss';
	@import './scss/styles.scss';
</style>
