<template>
  <header>
		<div class="wrapper navbar">
			<div class="logo">
					<a href="./"><img src="../../assets/chronicle-financial-300dpi.png" alt=""></a>
			</div>
			<nav>
				<ul>
						<li v-for="routes in links" v-bind:key="routes.id">
							<router-link
								class="navLink ${routes.name}"
								:to="`${routes.page}`"
								v-on:click="activePage"
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
  data() {
		return {
			links: [
        {
          id: 0,
					text: 'Home',
					name: 'home',
          page:'/'
				},
        {
          id: 1,
					text: 'Advisors',
					name: 'advisors',
          page:'/advisors'
				},
				{
          id: 3,
					text: 'Our Services',
					name: 'services',
          page:'/services'
        },
        {
          id: 4,
					text: 'Contact',
					name: 'contact',
          page:'/contact'
        }
			]
		}
	},
	methods: {
		activePage: function() {
			var activeLink = document.getElementsByClassName(this.name);
			alert(this);

			activeLink.parentElement.classList.add("active");
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../scss/styles.scss';
	@import './scss/styles.scss';
</style>
