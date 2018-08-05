<template>
  <header class="wrapper">
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
			<div class="header__nav">
				<ul>
						<li v-for="routes in links" v-bind:key="routes.id">
							<router-link
								class="navLink"
								:to="`${routes.page}`"
							>{{ routes.text }}
							</router-link>
						</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
  name: 'Header',
  data() {
		return {
			links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
				},
        {
          id: 1,
          text: 'Advisors',
          page:'/advisors'
				},
				{
          id: 3,
          text: 'Our Services',
          page:'/services'
        },
        {
          id: 4,
          text: 'Contact',
          page:'/contact'
        }
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../scss/styles.scss';
	@import './scss/styles.scss';
</style>
